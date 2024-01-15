import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from './CustomObject.jsx'
import Hexagon from './Hexagon.jsx'

extend({ OrbitControls })

export default function Experience()
{
    const { camera, gl } = useThree()

    const cubeRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta) =>
    {
        console.log(state.clock.elapsedTime)
        // const angle = state.clock.elapsedTime
        // state.camera.position.x = Math.sin(angle) * 8
        // state.camera.position.z = Math.cos(angle) * 8
        // state.camera.lookAt(0, 0, 0)

        // cubeRef.current.rotation.y += delta
        // groupRef.current.rotation.y += delta
    })

    return <>
        <orbitControls args={ [ camera, gl.domElement ] } />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <Hexagon height={4}/>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}