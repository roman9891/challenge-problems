const quickSort = (arr, start=0, end=arr.length) => {
    if (start < end) {
        let pivotIndex = pivotHelper(arr, start, end)
        // console.log("left")
        quickSort(arr, start, pivotIndex)
        // console.log(arr, pivotIndex+1, end)
        quickSort(arr, pivotIndex+1, end)

    }
    return arr
}

const pivotHelper = (arr, start = 0, end = arr.length) => {
    //returns array with pivot and index of pivot?
    //set first value as pivot
    //iterate from i = 1
    //if i is lower than pivot swap i to left
    //at end of loop move pivot after swaps
    let pivot = arr[start], count = start + 1

    for (let i = start + 1; i < end; i++) {
        if (arr[i] < pivot) {
            swap(arr, count, i)
            count++
        }
    }

    swap(arr, count-1, start)
    
    // console.log(arr)
    return count-1
}

const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(quickSort([28,41,4,11,16,1,40,14,36,37,42,18]))
console.log(quickSort([26,23,27,44,17,47,39,42,43,1]))
console.log(quickSort([4,8,2,1,5,7,6,3]))
// console.log(quickSort([4,8,2,1,5,7,6,3]))
