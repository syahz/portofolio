import { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface ModalProps {
  modal: {
    active: boolean
    index: number
  }
  projects: { title: string; src: string; color: string; description: string }[]
}

const Modal: React.FC<ModalProps> = ({ modal, projects }) => {
  const { active, index } = modal
  const modalContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (active) {
      gsap.to(modalContainer.current, {
        scale: 1,
        xPercent: -50,
        yPercent: -50
      })
    } else {
      gsap.to(modalContainer.current, {
        scale: 0
      })
    }
  }, [active])

  useEffect(() => {
    //Move Container
    const xMoveContainer = gsap.quickTo(modalContainer.current, 'left', { duration: 0.8, ease: 'power3' })
    const yMoveContainer = gsap.quickTo(modalContainer.current, 'top', { duration: 0.8, ease: 'power3' })

    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e
      xMoveContainer(pageX)
      yMoveContainer(pageY)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={modalContainer} className='modalContainer'>
        <div style={{ top: index * -100 + '%' }} className='modalSlider'>
          {projects.map((project, idx) => {
            const { src, color } = project
            return (
              <div className='modal' style={{ backgroundColor: color }} key={`modal_${idx}`}>
                <img src={`/img/projects/${src}`} width={300} height={0} alt='image' loading='lazy' />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Modal
