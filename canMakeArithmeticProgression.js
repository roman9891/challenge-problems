// given array of nums
// check to see if the difference between nums is the same
// return true or false

// sort array in ascending order
// store diff between i0 and i1
// loop through array
//  if difference between i and i+1 doesn't equal store return false
// otherwise return true

const canMakeArithmeticProgression = nums => {
    nums.sort((a,b) => a - b)

    let difference = nums[1] - nums[0]

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i+1] - nums[i] !== difference) return false
    }

    return true
}

console.log(canMakeArithmeticProgression([3,5,1]))
console.log(canMakeArithmeticProgression([1,2,4]))