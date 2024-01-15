export default function Hexagon({height, color}) {
    return(
        <mesh>
            <cylinderGeometry args={[1, 1, height, 6, 1, false]} />
            <meshStandardMaterial color={color} />
        </mesh> 
    )
}