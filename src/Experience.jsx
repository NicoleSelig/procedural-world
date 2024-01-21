import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from './CustomObject.jsx'
import Hexagon from './Hexagon.jsx'
import { Stats, Environment } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { Vector3, AxesHelper } from 'three'
import Terrain from './Terrain.jsx'

// export default function App() {
//   const gltf = useLoader(GLTFLoader, '/models/monkey.glb')

//   return (
//     <Canvas camera={{ position: [-0.5, 1, 2] }}>
//       <Environment files="/img/venice_sunset_1k.hdr" background blur={0.5} />
//       <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
//       <primitive object={gltf.scene} position={[0, 1, 0]} />
//       <OrbitControls target={[0, 1, 0]} autoRotate />
//       <axesHelper args={[5]} />
//       <Stats />
//     </Canvas>
//   )
// }

extend({ OrbitControls })

export default function Experience()
{
    const { camera, gl } = useThree()

    const cubeRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta) =>
    {
        // console.log(state.clock.elapsedTime)
        // const angle = state.clock.elapsedTime
        // state.camera.position.x = Math.sin(angle) * 8
        // state.camera.position.z = Math.cos(angle) * 8
        // state.camera.lookAt(0, 0, 0)

        // cubeRef.current.rotation.y += delta
        // groupRef.current.rotation.y += delta
    })

    return <>
        <orbitControls args={ [ camera, gl.domElement ] } />
        <Environment files="./images/scythian_tombs_2_4k.exr" background={true} />
        {/* The X axis is red, the Y axis is green and the Z axis is blue. */}
        <axesHelper args={[5]}/>

        <Terrain/>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}