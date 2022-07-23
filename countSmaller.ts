// https://leetcode.com/problems/count-of-smaller-numbers-after-self/

// 315. Count of Smaller Numbers After Self
// Hard

// 6745

// 185

// Add to List

// Share
// You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

 

// Example 1:

// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.
// Example 2:

// Input: nums = [-1]
// Output: [0]
// Example 3:

// Input: nums = [-1,-1]
// Output: [0,0]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

const countSmaller = (nums: number[]): number[] => {
    const result: number[] = []
    // iterate through array
    // slice from index to end
    // check less
    // push tally into result
    return result
}

const checkLess = (nums: number[], value: number): number => {
    let count = 0
    // iterate through array
    // if element is less than value increase count
    // return count
    return count
}

console.log(countSmaller([5,2,6,1]))
console.log(countSmaller([-1]))
console.log(countSmaller([-2,-1,0,1,2]))