// given array of nums with half nums odd and half even
// return array sorted where all even i are even nums and all odd i are odd
// bonus for sorting in place

const sortArrayByParityI = nums => {
    let odd = [], even = [], result = []

    nums.forEach(num => num % 2 === 0 ? even.push(num) : odd.push(num))

    odd.forEach((num, i) => result.push(even[i], odd[i]))

    return result
}

// in place strategy
// two pointers

const sortArrayByParityII = nums => {
    let odd, even, oddStore, evenStore, store

    if (nums[0] % 2 === 0) {
        even = 0
        let i = 1
        while (nums[i] % 2 === 0) {
            i++
        }
        odd = i
    } else {
        odd = 0
        let i = 1
        while (nums[i] % 2 !== 0) {
            i++
        }
        even = i
    }
    console.log(nums[odd], nums[even])
    for (i = 0; i < nums.length; i++) {
        store = nums[i]
        nums[i] = nums[even]
        even++
        while (nums[even] % 2 !== 0) even++
    }

    return nums
}

console.log(sortArrayByParityII([4,2,5,7]))
console.log(sortArrayByParityII([2,3]))
console.log(sortArrayByParityII([1,3,5,7,2,4,6,8]))