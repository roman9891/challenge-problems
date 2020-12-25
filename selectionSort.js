//loop through an array a number of times = to length
//set pointer to start
//set pointer to start + 1
//move right pointer each iteration
//compare start and right pointer
//swap if right is lower
//now start should be lowest
//repeat loop but start is start + 1
//return sorted array

const selectionSort = arr => {
    for (i = 0; i < arr.length; i++) {
        for (j = 1 + i; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                [arr[j], arr[i]] = [arr[i], arr[j]]
            }
            // console.log(arr, j, i)
        }
    }
    return arr
}

console.log(selectionSort([5,4,3,2,1]))
console.log(selectionSort([43,35,66723,234,453]))
console.log(selectionSort([1,2,3,5,5,5,3,2,1]))