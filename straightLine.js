var checkStraightLine = function(coordinates) {
    let deltaX = coordinates[0][0]-coordinates[1][0],
        deltaY = coordinates[0][1]-coordinates[1][1],
        slope = deltaY === 0 ? null : deltaX/deltaY
    
    for (let i = 1; i < coordinates.length - 1; i++) {
        let newDeltaX = coordinates[i][0]-coordinates[i+1][0],
            newDeltaY = coordinates[i][1]-coordinates[i+1][1],
            newSlope = newDeltaY === 0 ? null : newDeltaX/newDeltaY
        
        if (newSlope !== slope) return false
    }
    
    return true
}

console.log(checkStraightLine([[-3,-2],[-1,-2],[2,-2],[-2,-2],[0,-2]]))