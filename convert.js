// https://leetcode.com/problems/zigzag-conversion/

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

// PSEUDOCODE:


const convert = (string, numRows) => {
    if (numRows === 1) return string
    if (numRows === 2) return noZag(string)

    let y = 0
    let result = []
    const letters = [...string].reverse()

    while (letters.length) {
        let zig = true
        
        while (zig) {
            let popped = letters.pop()
            if (!popped) break

            if (result[y]) result[y] += popped
            else result[y] = popped
            
            if (y === numRows - 1) zig = false  
            else y++
        }

        while (!zig) {
            let popped = letters.pop()
            if (!popped) break
            
            y--
            if (result[y]) result[y] += popped
            else result[y] = popped

            if (y <= 1) {
                zig = true
                y = 0
            }
        }
    }
    return result.join('')
}

const noZag = string => {
    const evens = [...string].filter((x, i) => i % 2 === 0).join('')
    const odds = [...string].filter((x, i) => i % 2 !== 0).join('')
    return evens + odds
}

console.log(convert("PAYPALISHIRING", 3)) // "PAHNAPLSIIGYIR"
// console.log(convert("PAYPALISHIRING", 4)) // "PINALSIGYAHRPI"
// console.log(convert("A", 1)) // "A"
// console.log(convert("AB", 1)) // "AB"
// console.log(convert("ABCD", 2)) // "ACBD"

// 0 ' ' 0
// 1 ' 1 1
// 2 2 ' 2
// 3 ' ' 3

// 0         0
// 1       1
// 2     2
// 3   3
// 4 4
// 5