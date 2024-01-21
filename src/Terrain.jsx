import { Vector3 } from 'three'
import Hexagon from './Hexagon.jsx'
import { createNoise2D } from 'simplex-noise';

function tileToPosition(tileX, tileY, terrainSize) {
    const offset = 0.5 // makes honeycomb pattern
    return new Vector3((tileX + (tileY % 2) * offset + (terrainSize/2)) * 1.77, 0, tileY * 1.535 + terrainSize/1.5)
}

// // TODO: figure out how to make a circle
function makeTerrain(terrainSize = 20) {
    const hexagons = []
    for(let i=-terrainSize; i<=terrainSize, i++;) {
        for(let j=-terrainSize; j<=terrainSize, j++;) {
            let position = tileToPosition(j, i, terrainSize)
            const noise2d = createNoise2D()
            const noise = (noise2d(i * 0.1, j + 0.1) + 1) * 0.5
            hexagons.push(<Hexagon height={noise * 5} position={position} color={'purple'}/>)
        }
    }
    return hexagons
}



export default function Terrain() {
    return(
        <mesh key={'terrain'}>
            {makeTerrain()}
        </mesh> 
    )
}
           