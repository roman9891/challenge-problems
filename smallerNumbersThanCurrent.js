// given array of nums
// return array containing values of how many nums less than each num[i]

// iterate through array
// for each num
//   push into result nums.filter(num < num[i]).length
// n^2

const smallerNumbersThanCurrent = nums => {
    let result = []

    nums.forEach((currentNum, index, array) => result.push(array.filter(x => x < currentNum).length))

    return result
}

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))
console.log(smallerNumbersThanCurrent([6,5,4,8]))

// faster solution

function smallerNumbersThanCurrent(nums) {
    // Sort array in descending order
    const sorted = Array.from(nums).sort((n1, n2) => n2 - n1);
    // make a map object using array map that returns [key, value]
    // key is current num in map
    // value is remaining nums in array
    // if duplicates of num then final value will be last of the duplicates iterated over
    const map = new Map(sorted.map((num, index) => [num, nums.length - index - 1]));
    // return map of original nums that gets the value associated with each num in map obj
    return nums.map(num => map.get(num));
}
