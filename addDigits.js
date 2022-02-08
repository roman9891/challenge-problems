// https://leetcode.com/problems/add-digits/

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

const addDigits = num => {
    let moreThanOneDigit = true
    let digits = [...num.toString()]

    while (moreThanOneDigit) {  
        let total = 0

        for (let i = 0; i < digits.length; i++) {
            let digit = parseInt(digits[i])
            total += digit
        }

        let spreadTotal = [...total.toString()]

        if (spreadTotal.length === 1) return parseInt(spreadTotal[0])
        else digits = spreadTotal
    }
}

console.log(addDigits(311111111))