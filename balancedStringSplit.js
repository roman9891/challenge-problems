// given a string made up of L and R
// return the count of how many balanced substrings
// balanced substr = LR, RRLL, RRRRRLLLLL etc

// iterate through string
// keep count of whatever letter currently on
// if current letter is different than last reduce count
// at zero increase result; start counting up
// if letter changes before 0 start counting up
// return result

const balancedStringSplit = string => {
    let result = 0, count = 1, i = 1, same = true

    while (i < string.length) {
        if (string[i] !== string[i-1] && count !== 0) same = !same
        if (same) {
            count++
        } else {
            count--
            if (count === 0) {
                result++
                same = true
            }
        }
        i++
        console.log(count, result, same)
    }

    return result
}

console.log(balancedStringSplit("RLLLLRRRLR"))
console.log(balancedStringSplit("RLRRLLRLRL"))
console.log(balancedStringSplit("RRRLLL"))
console.log(balancedStringSplit("RLRRRLLRLL"))
console.log(balancedStringSplit("RRLRRLRLLLRL"))
