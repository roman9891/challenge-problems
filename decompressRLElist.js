// given array of nums
// that is compressed such so that each pair of nums is
// [freq, val]
// [1,2,3,4] => [2,4,4,4]
// return decompressed array

// Approach:
// itereate through loop
// if i is even
// save value to freq,
// if i is odd 
// push value freq times

const decompressRLElist = numbers => {
    let result = [], frequency = 0

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 === 0) frequency = numbers[i]
        else {
            while (frequency) {
                result.push(numbers[i])
                frequency--
            }
        }
    }

    return result
}

// one liner
var decompressRLElist = function(nums) {
    return nums.reduce(
      (acc, cur, i, arr) =>
      // if odd index 
      // return array with accumulator spread within 
      // and new array 
      //  with length equal to previous element 
      //  filled with current value
      // else return the accumulator
        i % 2 ? [...acc, ...Array(arr[i - 1]).fill(cur)] : acc,
      []
    );
};

console.log(decompressRLElist([1,2,3,4]))
console.log(decompressRLElist([1,1,2,3]))