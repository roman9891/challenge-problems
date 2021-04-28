// input: nums array, and integer n
// given arrays length is 2n and ordered x1...xn, y1...yn
// reorder so array is x1, y1, ... xn, yn
// for loop, push i and i + n into new array
// alternatively: in place swap i%2=0 with i+n
const shuffleArray = (nums, n) => {
    let result = []
    for (let i = 0; i < n; i ++) {
        result.push(nums[i], nums[i+n])
    }
    return nums
}

console.log(shuffleArray([2,5,1,3,4,7],3))
console.log(shuffleArray([1,2,3,4,4,3,2,1],4))
console.log(shuffleArray([1,1,2,2],2))