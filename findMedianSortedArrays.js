// https://leetcode.com/problems/median-of-two-sorted-arrays/?fbclid=IwAR0ZHRIkJgSCQh-YusUceFROadgcSh4r7IZE4yAt1MEVT0O-IspJqi_lNog

// 4. Median of Two Sorted Arrays
// Hard

// 14818

// 1868

// Add to List

// Share
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

const findMedianSortedArrays = (nums1, nums2) => {
    const lengthOfBothArrays = nums1.length + nums2.length
    const median = Math.floor(lengthOfBothArrays/2)
    const result = []
    let index1 = 0, index2 = 0

    for (let i = 0; i <= median; i++) {
        if (nums1[index1] < nums2[index2] || (index2 >= nums2.length)) {
            result.push(nums1[index1])
            index1++  
        }
        if (nums1[index1] >= nums2[index2] || (index1 >= nums1.length)){
            result.push(nums2[index2])
            index2++
        }
    }
    
    if (lengthOfBothArrays % 2 === 0) {
        return (result[median] + result[median - 1]) / 2
    } else {
        return result[median]
    }
}

console.log(findMedianSortedArrays([1,3], [2]))
console.log(findMedianSortedArrays([1,2], [3,4]))
console.log(findMedianSortedArrays([0,0], [0,0]))
console.log(findMedianSortedArrays([6, 13, 67, 97], [20, 40, 60, 98]))