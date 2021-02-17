// input: sorted array of intergers, integer
// return array (index 1) of two integers that add to target
// only one solution
// FIRST ATTEMPT
// pointer at 0 and length - 1
// if sum > target move right-pointer left
// if sum < target move left-pointer right
// if === sum then push to array and break

const twoSumTarget = (arr, target) => {
    let left = 0, 
        right = arr.length - 1

    while ((arr[left] + arr[right]) !== target) {
        let sum = arr[left] + arr[right]
        if (sum > target) {
            right--
        } else {
            left++
        }
    }
    
    return [left + 1, right + 1]
}

console.log(twoSumTarget([1,2,3,4], 6))