import { Vector3 } from 'three'
import Hexagon from './Hexagon.jsx'
import { createNoise2D } from 'simplex-noise';

function tileToPosition(tileX, tileY, terrainSize, height) {
    const offset = 0.5 // makes honeycomb pattern
    return new Vector3((tileX + (tileY % 2) * offset + (terrainSize/2)) * 1.77, height/2, tileY * 1.535 + terrainSize/1.5)
}

// // TODO: figure out how to make a circle
function makeTerrain(terrainSize = 60) {
    const hexagons = []
    for(let i=-terrainSize; i<=terrainSize, i++;) {
        for(let j=-terrainSize; j<=terrainSize, j++;) {
            const noise2d = createNoise2D()
            const height = (noise2d(i * 0.1, j * 0.1) + 1) * 0.5 * 5
            let position = tileToPosition(j, i, terrainSize, height)
            hexagons.push(<Hexagon height={height} position={position} color={'purple'}/>)
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
           