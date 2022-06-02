type Grid = number[][]

type Branch = {
    initialPosition: number[],
    grid: Grid,
    totalGold: number
}

const getMaximumGold = (grid: Grid): number => {
    let max = 0

    // iterate through positions excluding 0's
    // for each position find path value
    // update max
    grid.forEach((row, i) => {
        row.forEach((position, j) => {
            if (position) {
                console.log(`Starting at [${i}, ${j}]`, grid)
                let initialPosition = [i, j]
                let pathValue = step(initialPosition, grid)
                console.log(pathValue)
                if (pathValue > max) max = pathValue
            }
        })
    })

    return max
}

const step = (initialPosition: number[], grid: Grid, totalGold: number = 0, queue: Branch[] = [], maxGold: number = 0) => {
    let x = initialPosition[0]
    let y = initialPosition[1]

    console.log(`stepped to [${x}, ${y}]`)

    // update total gold of current path
    totalGold += grid[x][y]
    // update max if applicable
    if (totalGold > maxGold) maxGold = totalGold
    // create shallow copy of current grid
    const currentGrid = copyGrid(grid)
    // pick up gold at current tile
    currentGrid[x][y] = 0
    
    

    // check each direction
    // if not 0 then push branch to stack
    if (grid[x - 1] && grid[x - 1][y]) {
        const branch: Branch = {
            initialPosition: [x-1, y],
            grid: currentGrid,
            totalGold: totalGold,
        }

        queue.push(branch)
    }
    if (grid[x + 1] && grid[x + 1][y]) {
        const branch: Branch = {
            initialPosition: [x + 1, y],
            grid: currentGrid,
            totalGold: totalGold,
        }
        
        queue.push(branch)
    }
    if (grid[x][y - 1]) {
        const branch: Branch = {
            initialPosition: [x, y - 1],
            grid: currentGrid,
            totalGold: totalGold,
        }
        
        queue.push(branch)
    }
    if (grid[x][y + 1]) {
        const branch: Branch = {
            initialPosition: [x, y + 1],
            grid: currentGrid,
            totalGold: totalGold,
        }
        
        queue.push(branch)
    }

    // if you've exhausted all paths then return max
    if (!queue.length) return maxGold

    // if there's still paths then step to remaining paths
    const nextStep = queue.pop()
    return step(nextStep.initialPosition, nextStep.grid, nextStep.totalGold, queue, maxGold)
}

const copyGrid = (grid: Grid): Grid => {
    const newGrid = []

    grid.forEach(row => {
        newGrid.push([...row])
    })

    return newGrid
}

const grid = [
    [1,0,1],
    [1,1,2],
    [0,4,0]
]

console.log(getMaximumGold(grid))