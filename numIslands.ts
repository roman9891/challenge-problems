// https://leetcode.com/problems/number-of-islands/

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water. 

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 
// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

type Island = {
    [key: string]: boolean
}

const numIslands = (grid: string[][]): number => {
    // iterate through grid
    // if 1 check adjacency
    //   iterate through found islands and see if any adjacent tiles have already been found
    //   if so then track that island
    //   after checking all sides
    //   if only adjacent to one island then add to that island
    //   if adjacent to multiple islands then merge islands and add to new island
    //   if not then add as new island
    // return island count
    const foundIslands: Island[] = []

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const currentTile = grid[i][j]

            if (currentTile === "1") checkAdjacency(i, j, grid, foundIslands)
        }
    } 
    return foundIslands.length
}

const checkAdjacency = (i: number, j: number, grid: string[][], foundIslands: Island[]): void => {
    const coordinates = `${i}x${j}`
    const adjacentIslands: Island[] = []
    
    if (grid[i-1] && grid[i-1][j]) {
        const coordinate = `${i-1}x${j}`
        const island = foundIslands.find(island => island[coordinate])
        if (island && !adjacentIslands.includes(island)) adjacentIslands.push(island)
    }
    if (grid[i][j+1]) {
        const coordinate = `${i}x${j+1}`
        const island = foundIslands.find(island => island[coordinate])
        if (island && !adjacentIslands.includes(island)) adjacentIslands.push(island)
    }
    if (grid[i+1] && grid[i+1][j]) {
        const coordinate = `${i+1}x${j}`
        const island = foundIslands.find(island => island[coordinate])
        if (island && !adjacentIslands.includes(island)) adjacentIslands.push(island)
    }
    if (grid[i][j-1]) {
        const coordinate = `${i}x${j-1}`
        const island = foundIslands.find(island => island[coordinate])
        if (island && !adjacentIslands.includes(island)) adjacentIslands.push(island)
    }

    if (adjacentIslands.length > 1) {
        // merge adjacent islands
        // add coordinates to new island
        const island = mergeIslands(adjacentIslands, foundIslands)
        island[coordinates] = true
    } else if (adjacentIslands.length === 1) {
        // add coordinates to island
        const island = adjacentIslands[0]
        island[coordinates] = true
    } else {
        const newIsland: Island = {}
        newIsland[coordinates] = true
        foundIslands.push(newIsland)
    }
}

const mergeIslands = (adjacentIslands: Island[], foundIslands: Island[]): Island => {
    const newIsland: Island = {}
    const coordinates: string[] = []

    adjacentIslands.forEach(island => {
        Object.keys(island).forEach(key => coordinates.push(key))
    })

    coordinates.forEach(coordinate => newIsland[coordinate] = true)

    // deleteIsland
    adjacentIslands.forEach(island => {
        const index = foundIslands.findIndex(foundIsland => foundIsland === island)
        foundIslands.splice(index, 1)
    })

    foundIslands.push(newIsland)

    return newIsland
}

// console.log(numIslands([
//        ["1","1","1","1","0"],
//        ["1","1","0","1","0"],
//        ["1","1","0","0","0"],
//        ["0","0","0","0","0"]
//      ]))
// console.log(numIslands([
//        ["1","1","0","0","0"],
//        ["1","1","0","0","0"],
//        ["0","0","1","0","0"],
//        ["0","0","0","1","1"]
//      ]))
console.log(numIslands([
    ["1","1","1","1","1","1"],
    ["1","0","0","0","0","1"],
    ["1","0","1","1","0","1"],
    ["1","0","0","0","0","1"],
    ["1","1","1","1","1","1"]
]))