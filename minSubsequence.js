// given array of nums
// find min-size subsequence greater than rest of sequence

//Approach:
// sort nums and add total count
// iterate from greatest num
// subtract from total and add to result
// if greater than rest of sequence return result

const minSubsequence = numbers => {
    if (numbers.length === 1) return numbers

    let result = [], count1 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue), count2 = 0

    numbers = numbers.sort((a,b) => a - b).reverse()

    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i])
        count1 -= numbers[i]
        count2 += numbers[i]
        if (count2 > count1) return result
    }
}

console.log(minSubsequence([4,3,10,9,8]))
console.log(minSubsequence([4,4,7,6,7]))
console.log(minSubsequence([6]))