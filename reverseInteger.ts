// https://leetcode.com/problems/reverse-integer/description/

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1

const reverse = (x: number): number => {
    let isNegative = x < 0;
    let xAsString = ''
    let result
    if (isNegative) {
        xAsString = (-x).toString().split('').reverse().join('');
        result = -parseInt(xAsString)
    } else {
        xAsString = x.toString().split('').reverse().join('');
        result = parseInt(xAsString)
    }
    return result < -2147483648 || result > 2147483647 ? 0 : result;    
}