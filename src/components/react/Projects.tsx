import { useState } from 'react'
import Project from './Project'
import Modal from './Modal'
import ProjectDetail from './ProjectDetail'
import { projects, type Project as ProjectType } from '../../data/projects'

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 })
  const [selected, setSelected] = useState<ProjectType | null>(null)

  return (
    <>
      <section className='projects'>
        <h2>Projects</h2>
        <div className='list-projects'>
          <div className='separator ' />
          {projects.map((project, index) => (
            <div
              key={project.slug}
              onClick={() => setSelected(project)}
              style={{ cursor: 'pointer' }}
              role='button'
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setSelected(project)
              }}
            >
              <Project index={index} title={project.title} setModal={setModal} description={project.tech.join(' · ')} />
            </div>
          ))}
        </div>
        <Modal modal={modal} projects={projects} />
      </section>
      {selected && <ProjectDetail project={selected} onClose={() => setSelected(null)} />}
    </>
  )
}

export default Projects
