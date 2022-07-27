// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// Given an array of integers nums sorted in non-decreasing order, 
// find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

const searchRange = (nums: number[], target: number): number[] => {
    // Binary search:
    // recursively check mid point
    // if mid is higher than target lower mid and vice versa
    // return index or null
    // if target is found find range otherwise return [-1,-1]
    // find range:
    // once target is found look left until not target and vice versa
    // push left and right indices of target into result and return
    const index = binSearch(nums, target)

    if (index !== null) {
        return findRange(nums, index)
    } else {
        return [-1,-1]
    }
}

const binSearch = (nums: number[], target: number): number | null => {
    let start = 0
    let end = nums.length - 1
    let mid = Math.floor((start + end) / 2)

    while (nums[mid] !== target && start <= end) {
        if (target < nums[mid]) end = mid - 1
        else start = mid + 1
        mid = Math.floor((start + end) / 2)
    }

    return nums[mid] === target ? mid : null
}

const findRange = (nums: number[], index: number): number[] => {
    const target = nums[index]
    const result: number[] = []
    let leftIndex = index
    let rightIndex = index

    while (nums[leftIndex - 1] === target) {
        leftIndex = leftIndex - 1
    }

    result.push(leftIndex)

    while (nums[rightIndex + 1] === target) {
        rightIndex = rightIndex + 1
    }

    result.push(rightIndex)

    return result
}

console.log(searchRange([5,7,7,8,8,10], 8)) // [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)) // [-1,-1]
console.log(searchRange([], 0)) // [-1,-1]
console.log(binSearch([2,2], 2))