export default function Hexagon({height, position, color}) {
    return(
        <mesh 
        translateX={position.x}
        translateY={position.y}
        translateZ={height * 0.5}
        >
            <cylinderGeometry args={[1, 1, height, 6, 1, false]} />
            <meshStandardMaterial color={color} />
        </mesh> 
    )
}