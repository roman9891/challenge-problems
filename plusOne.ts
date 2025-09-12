/*
https://leetcode.com/problems/plus-one/
*/

// join to string
// parse int - actually convert to bigint
// plus one
// convert to string
// split
// convert to number

const plusOne = (digits: number[]): number[] => {
    let digitsAsInt = BigInt(digits.join(''))
    digitsAsInt = digitsAsInt + 1n
    return `${digitsAsInt}`.split('').map((digit) => Number.parseInt(digit))
}