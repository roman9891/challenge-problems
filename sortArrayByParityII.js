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
    let odd, even, oddStore, evenStore, store, swap

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
    console.log(nums[even], nums[odd])
    // 1,3,5,7,2,4,6,8
    for (let i = 0; i < nums.length; i++) {
        console.log(i)
        if (!store) store = nums[i]
        if (i % 2 === 0) {
            if (i === odd) {
                odd++
                while (nums[odd] % 2 === 0 && odd < nums.length) odd++
            }
            if (store % 2 === 0) {
                if (store !== nums[i]) {
                    swap = nums[i]
                    nums[i] = store
                    store = swap
                } else {
                    nums[i] = store
                    store = 0
                }  
            } else nums[i] = nums[even]
            even++
            while (nums[even] % 2 !== 0 && even < nums.length) even++
        } else {
            if (i === even) {
                even++
                while (nums[even] % 2 !== 0 && even < nums.length) even++
            }
            if (store % 2 !== 0) {
                if (store !== nums[i]) {
                    swap = nums[i]
                    nums[i] = store
                    store = swap
                } else {
                    nums[i] = store
                    store = 0
                }  
            } else nums[i] = nums[odd]
            odd++
            while (nums[odd] % 2 === 0 && odd < nums.length) odd++
        }

        // if (i % 2 === 0) {
        //     if (i === odd) {
        //         store = nums[i]
        //         console.log("storing: ", nums[i])
        //         nums[i] = nums[even]
        //         while (nums[odd] % 2 === 0 && odd < nums.length) odd++       
        //     }
        //     else if (store) {
        //         nums[i] = store
        //         store = 0
        //     } else {
        //         nums[i] = nums[even]
        //     }
        //     even++
        //     while (nums[even] % 2 !== 0 && even < nums.length) even++
        // } else {
        //     if (i === even) {
        //         store = nums[i]
        //         console.log("storing: ", nums[i])
        //         nums[i] = nums[odd]
        //         while (nums[even] % 2 !== 0 && even < nums.length) even++
        //     }
        //     else if (store) {
        //         nums[i] = store
        //         store = 0
        //     } else {
        //         nums[i] = nums[odd]
        //     }
        //     odd++
        //     while (nums[odd] % 2 === 0 && odd < nums.length) odd++
        // }
    }

    return nums
}

console.log(sortArrayByParityII([4,2,5,7]))
console.log(sortArrayByParityII([2,3]))
console.log(sortArrayByParityII([1,3,5,7,2,4,6,8]))