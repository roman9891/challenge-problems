/*

https://leetcode.com/problems/add-binary/

Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*/

const addBinary = (a: string, b: string): string => {
    // need to convert directly into BigInt to maintain precision
    // "0b" informs constructor that base is binary
    const aBaseTen = BigInt("0b" + a);
    const bBaseTen = BigInt("0b" + b);

    return (aBaseTen + bBaseTen).toString(2)
}