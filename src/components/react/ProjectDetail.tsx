import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import type { Project } from '../../data/projects'

interface ProjectDetailProps {
  project: Project
  onClose: () => void
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const ctx = gsap.context(() => {
      gsap.from('.pd-anim', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.1
      })
    }, pageRef)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      ctx.revert()
    }
  }, [onClose])

  return (
    <div ref={pageRef} className='project-detail' data-lenis-prevent>
      <button className='pd-back pd-anim' onClick={onClose} aria-label='Back'>
        <span>←</span> Back
      </button>

      <div className='pd-container'>
        <header className='pd-header'>
          <span className='pd-year pd-anim'>{project.year}</span>
          <h1 className='pd-title pd-anim'>{project.title}</h1>
          {project.subtitle && <p className='pd-subtitle pd-anim'>{project.subtitle}</p>}
          <p className='pd-role pd-anim'>{project.role}</p>
        </header>

        <div className='pd-hero pd-anim' style={{ backgroundColor: project.color }}>
          <img src={`/img/projects/${project.src}`} alt={project.title} loading='lazy' />
        </div>

        <div className='pd-body'>
          <section className='pd-block pd-anim'>
            <h2>Overview</h2>
            <p>{project.description}</p>
          </section>

          <section className='pd-block pd-anim'>
            <h2>Tech Stack</h2>
            <div className='pd-chips'>
              {project.tech.map((t) => (
                <span key={t} className='pd-chip'>
                  {t}
                </span>
              ))}
            </div>
          </section>

          <section className='pd-block pd-anim'>
            <h2>Key Features</h2>
            <ul className='pd-features'>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>

          {project.url && (
            <a className='pd-visit pd-anim' href={project.url} target='_blank' rel='noreferrer'>
              Visit Live Site ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
