// for each num in array
// if that num isn't already a key in tally obj then assign 1 to that key
// otherwise increase the value of that key by 1
// for each key in tally obj
// if the value is greater than 1
// add to result according to pair formula

const numIdenticalPairs = nums => {
    const tally = {}
    let result = 0
    
    nums.forEach(num => tally[num] ? tally[num]++ : tally[num] = 1)

    for (const key in tally) {
        if (tally[key] > 1) {
            result += tally[key] * ((tally[key] - 1) / 2)
        }
    }

    return result
}

console.log(numIdenticalPairs([1,1,1,1]))
console.log(numIdenticalPairs([1,2,3,1,1,3]))
console.log(numIdenticalPairs([1,2,3]))
