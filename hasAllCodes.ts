// https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/

// Given a binary string s and an integer k, return true if every binary code of length k is a substring of s. Otherwise, return false.

 

// Example 1:

// Input: s = "00110110", k = 2
// Output: true
// Explanation: The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indices 0, 1, 3 and 2 respectively.
// Example 2:

// Input: s = "0110", k = 1
// Output: true
// Explanation: The binary codes of length 1 are "0" and "1", it is clear that both exist as a substring. 
// Example 3:

// Input: s = "0110", k = 2
// Output: false
// Explanation: The binary code "00" is of length 2 and does not exist in the array.
 

// Constraints:

// 1 <= s.length <= 5 * 105
// s[i] is either '0' or '1'.
// 1 <= k <= 20

const hasAllCodes = (s: string, k: number): boolean => {
    // generate k length binaries
    // recursively push 0 and 1 onto items in array
    // binaries.every(s includes elem)
    if (!s.includes("0") || !s.includes("1")) return false

    const binaries: string[] = ["0", "1"]

    for (let i = 1; i < k; i++) {
        const newBinaries: string[] = []

        for (let binary of binaries) {
            let newBinary = binary + "0"

            if (!s.includes(newBinary)) return false

            newBinaries.push(newBinary)
        }

        for (let binary of binaries) {
            let newBinary = binary + "1"

            if (!s.includes(newBinary)) return false

            newBinaries.push(newBinary)
        }

        binaries.push(...newBinaries)
    }

    return true
}

console.log(hasAllCodes("00110110", 20))
console.log(hasAllCodes("0110", 1))
console.log(hasAllCodes("0110", 2))
console.log(hasAllCodes("1", 1))
