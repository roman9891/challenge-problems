// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

const lengthOfLongestSubstring = (string) => {
    // sliding window
    // outer loop iterates through string
    // sliding loop intializes a tracking object that checks for repeating characters
    // on repeat update maxLength
    let maxLength = 0

    for (let i = 0; i < string.length; i++) {
        if (string.length === 1) return 1
        let tracker = {}

        for (let j = i; j < string.length; j++) {
            let currentChar = string[j]
            
            if (!tracker[currentChar] && j === string.length - 1) {
                let length = j - i + 1

                if (length > maxLength) maxLength = length
            }
            else if (!tracker[currentChar]) tracker[currentChar] = true
            else {
                let length = j - i

                if (length > maxLength) maxLength = length
                
                break
            }
        }
    }
    return maxLength
}

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))