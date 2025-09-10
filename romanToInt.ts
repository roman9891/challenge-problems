/*
https://leetcode.com/problems/roman-to-integer/
*/

// iterate through string
// look ahead one position
// if either of the subtraction clauses (i, x, c) before (vx, lc, dm)
// subtract
// else add

const romanToInt = (s:string): number => {
    let total = 0
    const numeralDictionary = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    const subtractionReference = {
        "I": {
            "V": true,
            "X": true
        },
        "X": {
            "L": true,
            "C": true
        },
        "C": {
            "D": true,
            "M": true
        }
    }

    for (let i = 0; i < s.length; i++) {
        const currentNumeral = s[i]
        const nextNumeral = s[i+1]
        const shouldSubtract = subtractionReference[currentNumeral] && subtractionReference[currentNumeral][nextNumeral]

        if (shouldSubtract) {
            total -= numeralDictionary[currentNumeral]
        } else {
            total += numeralDictionary[currentNumeral]
        }
    }

    return total
}