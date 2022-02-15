// takes subsequence and string
// returns true if sub if all characters are in string in same sequence (not necessarily in consecutive sequence)
// else return false

// set p1 to first letter of sub
// p2 loops through string
// if p2 is on current p1 then check it off
// after loop return whether all letters checked

const isSubsequence = (subString, string) => {
    let p1 = 0

    for (let char of string) {
        if (char === subString[p1]) p1++
    }

    return p1 === subString.length
}

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing','sting'))
console.log(isSubsequence('abc','acb'))