export default function Hexagon({height, position, color}) {
    return(
        <mesh 
            position={position}
        >
            <cylinderGeometry args={[1, 1, height, 6, 1, false]} />
            <meshStandardMaterial color={color} />
        </mesh> 
    )
}