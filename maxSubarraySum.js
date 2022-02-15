// takes array and length of subarray
// return largest sum of subarray consisting of consecutive values in array

// loop through array until less than LENGTH digits left
// each loop look add current value and next LENGTH values
// update max if new max

const maxSubarraySum = (array, length) => {
    if (array.length < length) return null

    let max = 0

    for (let i = 0; i < (array.length - length + 1); i++) {

        let subtotal = array[i]

        // sliding loop adds next (length - 1) values
        for (let j = 1; j < length; j++) {
            subtotal += array[i+j]
        }

        if (subtotal > max) max = subtotal
    }
    return max
}

console.log(maxSubarraySum([1,2,3,4,5,6,7], 3))