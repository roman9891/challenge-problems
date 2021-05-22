// given array of nums
// return sum of all odd length subarray sums
// 1,2,3,4 has length of 4 so it has 4 subarrays of length 1 and 2 subarrays of length 3
// [1] + [2] + [3] + [4] + [1,2,3] + [2,3,4] = 25

// create outer loop that tracks sub array length
// i starts at 1 and increases by 2 each time
// inner loop moves along position of array adding a number of proceeding values equal to outer count

const sumOddLengthSubarrays = nums => {
    let sum = 0
    for (let i = 1; i <= nums.length; i +=2) {
        for (let j = 0; j < nums.length - (i - 1); j++) {
            for (let k = 0; k < i; k++) {
                sum += nums[j+k]
            }
        }
    }
    return sum
}

console.log(sumOddLengthSubarrays([1,4,2,5,3]))
console.log(sumOddLengthSubarrays([1,2]))
console.log(sumOddLengthSubarrays([10,11,12]))

// O(n) solution that calculates occurrence of numbers
var sumOddLengthSubarrays = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * getOccurrenceCount(i, arr.length);
    }
    return sum;
}

function getOccurrenceCount(index, arrayLength) {
    return Math.ceil(((index + 1) * (arrayLength - index))/2);
}