import { useEffect, useRef, useState } from 'react'
import { useProgress } from '@react-three/drei'
import gsap from 'gsap'

const PreLoader = () => {
  const { progress, active } = useProgress()
  const [shown, setShown] = useState(0)
  const [hidden, setHidden] = useState(false)
  const loaderRef = useRef<HTMLDivElement>(null)
  const shownRef = useRef(0)

  // Ease the displayed number toward the real load progress.
  useEffect(() => {
    const obj = { v: shownRef.current }
    const tween = gsap.to(obj, {
      v: progress,
      duration: 0.8,
      ease: 'power2.out',
      onUpdate: () => {
        shownRef.current = obj.v
        setShown(Math.round(obj.v))
      }
    })
    return () => {
      tween.kill()
    }
  }, [progress])

  // Slide the overlay away once every asset finished loading.
  useEffect(() => {
    if (progress >= 100 && !active) {
      const tween = gsap.to(loaderRef.current, {
        yPercent: -100,
        duration: 1.1,
        ease: 'power3.inOut',
        delay: 0.6,
        onComplete: () => setHidden(true)
      })
      return () => {
        tween.kill()
      }
    }
  }, [progress, active])

  // Reveal the centered brand on mount.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.loader-brand > *', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15
      })
    }, loaderRef)
    return () => {
      ctx.revert()
    }
  }, [])

  // Safety fallback: never trap the user if assets stall.
  useEffect(() => {
    const fb = setTimeout(() => setHidden(true), 12000)
    return () => clearTimeout(fb)
  }, [])

  if (hidden) return null

  return (
    <div ref={loaderRef} className='loader'>
      <div className='loader-brand'>
        <p className='loader-iam'>I AM</p>
        <h1 className='loader-name'>INGSUN</h1>
        <p className='loader-tag'>Muhammad Syafiq Rohman Noor — Fullstack Web Developer</p>
      </div>
      <div className='loader-content'>
        <div className='loader-bar'>
          <span style={{ width: `${shown}%` }} />
        </div>
        <p className='loader-count'>
          {shown}
          <small>%</small>
        </p>
      </div>
    </div>
  )
}

export default PreLoader
