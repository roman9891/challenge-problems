// takes array of positive integers and a positive integer
// returns shortest contiguous subarray whose sum is >= to n
// else returns 0

// main loop: loop through array
// slide until sum is greater than n or until end of array
// update according to current subarray length

const minSubArrayLen = (array, n) => {
    let minArray

    for (let i = 0; i < array.length; i++) {
        let currentArray = [array[i]]

        // slide ahead until subarray >= n or until end of array
        for (let j = i + 1; (currentArray.reduce((a,b) => a + b) < n && j < array.length); j++) {
            currentArray.push(array[j])
        }

        // assign the first subarray regardless of length and then after that only reassign if its shorter in length
        if (!minArray) minArray = [...currentArray]
        if (currentArray.length < minArray.length && currentArray.reduce((a,b) => a + b) >= n) minArray = [...currentArray]
        // *note* the && clause is to prevent reassignment from subarrays that don't meet criteria
        // these arise if the slide loop reaches the end of the array without reaching a sum greater than n
    }
    return minArray.reduce((a,b) => a + b) >= n ?  minArray.length : 0
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7))
console.log(minSubArrayLen([4,3,3,8,1,2,3],110))
