// check if string contains each letter of abc
// if true return true else false

// iterate
// add each letter to tally obj
// check each letter of abc as key in obj
// if no key return false
// else return true

const checkIfPangram = string => {
    const tallyObj = {}
    let count = 0

    for (let i = 0; i < string.length; i++) {
        if (!tallyObj[string[i]]) {
            tallyObj[string[i]] = 1
            count++
        }
    }
    
    return count === 26
}

// switched from checking abc to checking if 26
// switched from using keys.length to counting in for loop so that I didn't need to make new array

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
console.log(checkIfPangram("leetcode"))