// https://leetcode.com/problems/reduce-array-size-to-the-half/

// You are given an integer array arr. 
// You can choose a set of integers and remove all the occurrences of these integers in the array.
// Return the minimum size of the set so that at least half of the integers of the array are removed.

// Example 1:
// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2
// Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] 
// which has size 5 (i.e equal to half of the size of the old array).
// Possible sets of size 2 are {3,5},{3,2},{5,2}.
// Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] 
// which has a size greater than half of the size of the old array.

// Example 2:
// Input: arr = [7,7,7,7,7,7]
// Output: 1
// Explanation: The only possible set you can choose is {7}. This will make the new array empty.
 
// Constraints:
// 2 <= arr.length <= 105
// arr.length is even.
// 1 <= arr[i] <= 105

const minSetSize = (arr: number[]): number => {
    // tracking object that tracks count of each number
    // sort result by highest count
    // subtract highest counts until lower than half
    // return quantity of counts removed
    const tracker: {[key: string]: number} = {}
    let target = Math.ceil(arr.length / 2)
    let result = 0

    arr.forEach(num => {
        if (tracker[num]) tracker[num] ++
        else tracker[num] = 1
    })

    const frequencyCounts: number[] = Object.values(tracker)
    frequencyCounts.sort((a,b) => a - b)

    while (target > 0) {
        let count = frequencyCounts.pop()
        if (count) {
            target = target - count
            result++
        }
    }
    
    return result
}

console.log(minSetSize([3,3,3,3,5,5,5,2,2,7])) // 2
console.log(minSetSize([7,7,7,7,7,7])) // 1