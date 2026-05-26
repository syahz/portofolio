import { Mesh } from 'three'
import { useControls } from 'leva'
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Text, MeshTransmissionMaterial, Html } from '@react-three/drei'

const Model = () => {
  const mail = useRef<Mesh>(null)
  const { nodes } = useGLTF('/medias/Mail.glb')
  const { viewport } = useThree()
  const scaleUp = viewport.width < 7 ? viewport.width / 9 : viewport.width / 16

  useFrame(() => {
    if (mail.current) {
      mail.current.rotation.y += 0.009
    }
  })

  const materialProps = useControls(
    {
      thickness: { value: 1.3, min: 0, max: 3, step: 0.1 },
      roughness: { value: 0.2, min: 0, max: 1, step: 0.01 },
      transmission: { value: 1, min: 0, max: 1, step: 0.1 },
      ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
      chromaticAberration: { value: 0.02, min: 0, max: 1 },
      backside: { value: true }
    },
    { leva: false }
  )

  return (
    <group scale={scaleUp}>
      <Text fontSize={1.5} position={[0, 0, -1.6]}>
        Contact Me
      </Text>
      <Html scale={viewport.width / 25} position={[0, 3.5, -1.6]} className='detail-contact'>
        <a href='https://github.com/syahz' target='blank_'>
          <img src='/img/github.png' alt='Github Syafiq Rohman Noor' /> @syahz
        </a>
        <a href='https://www.instagram.com/syafiqrnn' target='blank_'>
          <img src='/img/instagram.png' alt='Instagram Syafiq Rohman Noor' /> @ingsun.std
        </a>
        <a href='https://www.linkedin.com/in/syafiq-rohman' target='blank_'>
          <img src='/img/linkedin.png' alt='Linkedin Syafiq Rohman Noor' /> Syafiq Rohman
        </a>
      </Html>
      <mesh ref={mail} {...(nodes.Plane as Mesh)}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  )
}

export default Model
