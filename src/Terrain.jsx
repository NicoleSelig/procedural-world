import { Vector3 } from 'three'
import Hexagon from './Hexagon.jsx'
import { createNoise2D } from 'simplex-noise';

const MIN_SNOW_HEIGHT = 8
const MIN_MOUNTAIN_HEIGHT = 6
const MIN_GRASS_HEIGHT = 2

function tileToPosition(tileX, tileY, terrainSize, height) {
    const offset = 0.5 // makes honeycomb pattern
    return new Vector3((tileX + (tileY % 2) * offset + (terrainSize/2)) * 1.77, height/2, tileY * 1.535 + terrainSize/1.5)
}

function getColor(height) {
    console.log(height)
    if (height >= MIN_SNOW_HEIGHT) return 'white'
    if (height >= MIN_MOUNTAIN_HEIGHT) return 'brown'
    if (height >= MIN_GRASS_HEIGHT) return 'green'
    return 'blue'
}

// // TODO: figure out how to make a circle
function makeTerrain(terrainSize, maxHeight) {
    const hexagons = []
    const noise2d = createNoise2D()
    for(let i=-terrainSize; i<=terrainSize, i++;) {
        for(let j=-terrainSize; j<=terrainSize, j++;) {
            const height = Math.pow((noise2d(i * 0.1, j * 0.1) + 1) * 0.5, 1.5) * maxHeight
            let position = tileToPosition(j, i, terrainSize, height)
            // color(getColor(height))
            hexagons.push(<Hexagon height={height} position={position} color={getColor(height)}/>)
        }
    }
    return hexagons
}



export default function Terrain({size=20, maxHeight}) {
    return(
        <mesh key={'terrain'}>
            {makeTerrain(size, maxHeight)}
        </mesh> 
    )
}
           