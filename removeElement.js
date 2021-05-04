// given an array of integers and a value
// move all other values to the front of the array in place
// then return length of non-val values

// initialize two pointers at 0
// while p2 < length of array
// if p2 points to number besides value
//   move it to front by assigning that value to p1
//   then increment p1 and p2
// otherwise increment p2

const removeElement = (nums, val) => {
    let p1 = 0
    let p2 = 0

    while (p2 < nums.length) {
            if (nums[p2] !== val) {
                nums[p1] = nums[p2]
                p1++
                p2++
            } else p2++
    }

    return p1
}

console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))
console.log(removeElement([3,2,2,3], 2))