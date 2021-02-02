const maximumWealth = arr => {
    let maxWealth = 0
    arr.forEach(wealthArr => {
        let currentWealth = wealthArr.reduce((x,sum) => x + sum)
        if (currentWealth > maxWealth) maxWealth = currentWealth
    })
    return maxWealth
}

console.log(maximumWealth([[1,2,3],[3,2,1]]))
console.log(maximumWealth([[1,5],[7,3],[3,5]]))