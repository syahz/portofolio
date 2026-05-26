import React from 'react'

interface ModalState {
  active: boolean
  index: number
}

interface ProjectProps {
  index: number
  title: string
  description: string
  setModal: (state: ModalState) => void
}

const Project: React.FC<ProjectProps> = ({ index, title, description, setModal }) => {
  return (
    <div>
      <div
        className='card'
        onMouseEnter={() => {
          setModal({ active: true, index })
        }}
        onMouseLeave={() => {
          setModal({ active: false, index })
        }}
      >
        <p className='title'>{title}</p>
        <p>{description}</p>
      </div>
      <div className='separator ' />
    </div>
  )
}

export default Project
