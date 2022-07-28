// https://leetcode.com/problems/valid-anagram/

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false
 
// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

const isAnagram = (s: string, t: string): boolean => {
    // create tracking object for each letter in s
    // assign each key as a letter
    // assign each value that letters count
    // iterate through t
    // subtract count from tracker
    // loop through tracker
    // if any value isn't zero return false
    // otherwise true
    if (s.length !== t.length) return false

    const tracker: {[key: string]: number} = {}

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (!tracker[char]) tracker[char] = 1
        else tracker[char]++
    }
    
    for (let i = 0; i < t.length; i++) {
        let char = t[i]
        if (!tracker[char]) return false
        if (tracker[char]) {
            tracker[char]-- 
            if (tracker[char] < 0) return false
        }
    }

    for (let key in tracker) {
        if (tracker[key] !== 0) return false
    }

    return true
}

console.log(isAnagram("anagram", "nagaram")) // true
console.log(isAnagram("rat", "car")) // false