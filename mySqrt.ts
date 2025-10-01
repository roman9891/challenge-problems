/* 
https://leetcode.com/problems/sqrtx/

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.
*/

// halve value and reference the square value
// repeat process until upper and lower range found
// count up until find a higher square
// return previous integer

const mySqrt = (num: number) => {
    if (num === 1) return num

    let currentNum = num

    while ((currentNum * currentNum) > num) {
        currentNum = Math.floor(currentNum / 2)
    }

    while ((currentNum * currentNum) < num) {
        currentNum += 1
    }

    return currentNum * currentNum === num ? currentNum : Math.floor(currentNum - 1)
}