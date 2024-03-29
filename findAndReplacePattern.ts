// https://leetcode.com/problems/find-and-replace-pattern/

// Given a list of strings words and a string pattern, return a list of words[i] that match pattern. 
// You may return the answer in any order.
// A word matches the pattern if there exists a permutation of letters p so that 
// after replacing every letter x in the pattern with p(x), we get the desired word.
// Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, 
// and no two letters map to the same letter.

// Example 1:
// Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
// Output: ["mee","aqq"]
// Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
// "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.

// Example 2:
// Input: words = ["a","b","c"], pattern = "a"
// Output: ["a","b","c"]
 
// Constraints:
// 1 <= pattern.length <= 20
// 1 <= words.length <= 50
// words[i].length == pattern.length
// pattern and words[i] are lowercase English letters.

const findAndReplacePattern = (words: string[], pattern: string): string[] => {
    // iterate through words
    // for each word compare pattern
    // compare pattern:
        // convert letters to unicode
        // subtract starting value from all letters
        // compare values
    // if pattern matches push into result
    // return result
    const targetPattern = convertStringToPattern(pattern)
    const result: string[] = []

    words.forEach(word => {
        const currentPattern = convertStringToPattern(word)
        if (currentPattern === targetPattern) result.push(word)
    })

    return result
}

const convertStringToPattern = (s: string): string => {
    // create tracking object
    // create counter
    // iterate through letters
    // if letter doesn't exist
    // assign letter as key in object and count as value
    // then increase count
    // map letters to their value in object
    // return map as string
    const tracker: {[key: string]: number} = {}
    let count: number = 0

    for (let i = 0; i < s.length; i++) {
        let currentLetter = s[i]

        if (tracker[currentLetter] === undefined) {
            tracker[currentLetter] = count
            count++
        }
    }

    let letters = s.split('')
    const pattern = letters.map(letter => tracker[letter])
    return pattern.join('')
}

console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb")) // ["mee", "aqq"]
console.log(findAndReplacePattern(["a","b","c"], "a")) // ["a","b","c"]
console.log(convertStringToPattern("test"))