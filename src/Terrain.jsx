import { Vector3 } from 'three'
import Hexagon from './Hexagon.jsx'

function tileToPosition(tileX, tileY, terrainSize) {
    const offset = 0.5 // makes honeycomb pattern
    return new Vector3((tileX + (tileY % 2) * offset + terrainSize/2) * 1.77, -terrainSize/2, tileY * 1.535 + terrainSize/2)
}

// // TODO: figure out how to make a circle
function makeTerrain(terrainSize = 15) {
    const hexagons = []
    for(let i=-terrainSize; i<=terrainSize, i++;) {
        for(let j=-terrainSize; j<=terrainSize, j++;) {
            let position = tileToPosition(j, i, terrainSize)
            hexagons.push(<Hexagon height={3} position={position} color={'purple'}/>)
        }
    }
    return hexagons
}



export default function Terrain() {
    return(
        <mesh>
            {makeTerrain()}
        </mesh> 
    )
}
           