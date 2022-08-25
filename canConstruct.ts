// https://leetcode.com/problems/ransom-note/

// Given two strings ransomNote and magazine, 
// return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:
// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

const canConstruct = (ransomNote: string, magazine: string): boolean => {
    // track all letters and counts in ransom inside object
    // iterate over magazine
    // at each letter subtract count
    // return whether every entry less than 1
    const tracker: {[key:string]: number} = {}

    for (let i = 0; i < ransomNote.length; i ++) {
        let letter = ransomNote[i]

        tracker[letter] ? tracker[letter] ++ : tracker[letter] = 1
    }

    for (let i = 0; i < magazine.length; i ++) {
        let letter = magazine[i]

        if (tracker[letter]) tracker[letter] --
    }

    const values: number[] = Object.values(tracker)
    return values.every(value => value <= 0)
}

console.log(canConstruct("a","b")) // false
console.log(canConstruct("aa", "ab")) // false
console.log(canConstruct("aa", "aab")) // true