// https://leetcode.com/problems/number-of-matching-subsequences/

// 792. Number of Matching Subsequences
// Medium

// 4034

// 172

// Add to List

// Share
// Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
 

// Example 1:

// Input: s = "abcde", words = ["a","bb","acd","ace"]
// Output: 3
// Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".
// Example 2:

// Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
// Output: 2
 

// Constraints:

// 1 <= s.length <= 5 * 104
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 50
// s and words[i] consist of only lowercase English letters.

const numMatchingSubseq = (s: string, words: string[]): number => {
    // two pointers
    // iterate through words
    // for each word
    // pointer on 0 at word and s
    // for each letter in word move forward in s until its found or end of s
    // if all letters are found increase count
    let result = 0
    return result
}

console.log(numMatchingSubseq("abcde", ["a","bb","acd","ace"])) // 3
console.log(numMatchingSubseq("dsahjpjauf", ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"])) // 2