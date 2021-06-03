// given array of nums
// sort array in ascending order according to 1's in their binary form

// helper function that converts into 1's
// toString(2)
// forEach if char is 1 count ++
// return count
// array.sort(a.countones - b.countones)

const sortByBits = nums => nums.sort((a,b) => countOnes(a) - countOnes(b) || a - b)

const countOnes = num => num.toString(2).split('').filter(bit => bit === '1').length

console.log(sortByBits([0,1,2,3,4,5,6,7,8]))
console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1]))
console.log(sortByBits([10000,10000]))