// given string of 0 and 1s
// return true if the longest consecutive string of 1s is longer than 0s
// otherwise return false

// loop through string
// if on 0
// count++
// while next is 0
// i++ / count++
// if count > zeros then zeros = count
// same for 1
// return ones > zeros

const checkZeroOnes = numsString => {
    let zeros = 0, ones = 0, count

    for (let i = 0; i < numsString.length; i++) {
        count = 0
        if (numsString[i] === '0') {
            count++
            while (numsString[i+1] === '0') {
                i++
                count++
            }
            if (count > zeros) zeros = count
        }
        if (numsString[i] === '1') {
            count++
            while (numsString[i+1] === '1') {
                i++
                count++
            }
            if (count > ones) ones = count
        }
    }
    return ones > zeros
}

console.log(checkZeroOnes("1101"))
console.log(checkZeroOnes("111000"))
console.log(checkZeroOnes("110100010"))