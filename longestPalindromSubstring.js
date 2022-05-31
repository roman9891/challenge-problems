// https://leetcode.com/problems/longest-palindromic-substring/

// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

const longestPalindromeSubstring = (string) => {
    // iterate from both ends of the string
    // if letters are equal look ahead
    // once letters are not equal or end is reached update max length
    let longestSubstring = ''
    let currentSubstring = ''

    for (let i = 0; i < string.length; i++) {
        let lastIndex = string.length - 1 - i
        let firstChar = string[i]
        let lastChar = string[lastIndex]

        // console.log({
        //     first: string[i],
        //     last: string[lastIndex]
        // })

        if (firstChar === lastChar) {
            currentSubstring += firstChar
            console.log({currentSubstring})
            if (i === string.length - 1) {
                if (currentSubstring.length > longestSubstring.length) longestSubstring = currentSubstring
            }
        } else {
            if (currentSubstring) {
                if (currentSubstring.length > longestSubstring.length) longestSubstring = currentSubstring
                currentSubstring = ''
            }
        }
    }

    return longestSubstring
}

// iterate forwards through string
// for each letter iterate from back through string
// if front equals back check each letter towards each other

console.log(longestPalindromeSubstring("babad"))
console.log(longestPalindromeSubstring("cbbd"))