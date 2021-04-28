const countMatches = (items, key, value) => {
    let result = []
    let index

    if (key === "type") index = 0
    else if (key === "color") index = 1
    else index = 2

    for (let i = 0; i < items.length; i ++) {
        if (items[i][index] === value) result.push(items[i])
    }

    return result.length
}

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver"))
console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone"))