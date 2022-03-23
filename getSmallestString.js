// https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/

// The numeric value of a lowercase character is defined as its position (1-indexed) in the alphabet, 
// so the numeric value of a is 1, the numeric value of b is 2, the numeric value of c is 3, and so on.

// The numeric value of a string consisting of lowercase characters is defined as the sum of its characters' numeric values. 
// For example, the numeric value of the string "abe" is equal to 1 + 2 + 5 = 8.

// You are given two integers n and k. Return the lexicographically smallest string with length equal to n and numeric value equal to k.

// Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order, that is, 
// either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.

 

// Example 1:

// Input: n = 3, k = 27
// Output: "aay"
// Explanation: The numeric value of the string is 1 + 1 + 25 = 27, and it is the smallest string with such a value and length equal to 3.
// Example 2:

// Input: n = 5, k = 73
// Output: "aaszz"
 

// Constraints:

// 1 <= n <= 105
// n <= k <= 26 * n

// PSEUDOCODE

// while length or total is remaining
// subtract remaining letters from total remaining
// if difference is greater or equal to 26 use z
// otherwise use appropriate letter
// return string

const getSmallestString = (n,k) => {
    const alphabet = {}
    let smallestString = []

    for (let i = 1; i < 27; i ++) {
        alphabet[i] = String.fromCharCode(i+96)
    }

    while (k) {
        let remainingTotal = k - n + 1
        
        if (remainingTotal >= 26) {
            smallestString.push('z')
            k = k - 26
            n--
        } else if (remainingTotal < 26 && k > n){
            smallestString.push(alphabet[remainingTotal])
            n--
            k = n
        } else {
            smallestString.push('a')
            k--
            n--
        }
    }

    return smallestString.reverse().join('')
}

// failed attempt to improve on algorithm using algebra however it doesn't work for large values
const getSmallestStringRefactor = (n, k) => {
    const alphabet = {}

    for (let i = 1; i < 27; i ++) {
        alphabet[i] = String.fromCharCode(i+96)
    }

    const numberOfZs = Math.floor((k - (n - 1)) / 26)
    console.log(numberOfZs)
    k = k - (26 * numberOfZs)
    n = n - numberOfZs

    const remainder = alphabet[k - n + 1]
    const numberOfAs = n - 1
    const arrayOfZs = new Array(numberOfZs).fill('z')
    const arrayOfAs = new Array(numberOfAs).fill('a')

    return [...arrayOfAs, remainder, ...arrayOfZs].join('')
}

// console.log({
//     original: getSmallestString(3,27),
//     refactor: getSmallestStringRefactor(3,27)
// })
// console.log({
//     original: getSmallestString(5,73),
//     refactor: getSmallestStringRefactor(5,73)
// })
console.log({
    original: getSmallestString(20,500),
    refactor: getSmallestStringRefactor(20,500)
})
