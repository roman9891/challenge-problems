// given a string
// return the max nested depth of parentheticals

// create count and max variables initialized at 0
// iterate through string
// for each "(" add one to count
// then if count is higher than max assign that value to max
// for each ")" subtract 1
// *optimize* if count is greater than remaining length return count

const maxDepth = string => {
    let count = 0, max = 0

    for (const i in string) {
        if (string[i] === "(") {
            count++
            if (count > max) max = count
        } else if (string[i] === ")") {
            count--
        }
    }

    return max
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1"))
console.log(maxDepth("(1)+((2))+(((3)))"))
console.log(maxDepth("1+(2*3)/(2-1)"))
console.log(maxDepth("1"))