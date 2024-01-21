import { Vector3 } from "three";

export default function Hexagon({height, position, color}) {
    return(
        <mesh
            position={position}
            key={`${position.x}-${position.z}`}
            translateY={height/2}
        >
            <cylinderGeometry args={[1, 1, height, 6, 1, false]} />
            <meshStandardMaterial color={color} />
        </mesh> 
    )
}