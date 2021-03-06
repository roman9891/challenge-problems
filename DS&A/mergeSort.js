//splits array into individual arrays and then merges them in sorted order
//merging is helper method
//use two pointers to compare values left to right of both arrays
//push into results array
//if one pointer reaches the end push the rest of the other arrays values into results

const merger = (arr1, arr2) => {
    const result = []
    let p1 = 0, p2 = 0

    while (p1 < arr1.length && p2 < arr2.length) {//while neither pointer has reached end
        if (arr1[p1] < arr2[p2]) {//add lower pointer value and increment that pointer
            result.push(arr1[p1])
            p1++
        } else {
            result.push(arr2[p2])
            p2++
        }
    }
    //the remaining values of the lagging pointer are already sorted so they can just be pushed in
    while (p1 < arr1.length) {
        result.push(arr1[p1])
        p1++
    }

    while (p2 < arr2.length) {
        result.push(arr2[p2])
        p2++
    }

    return result
}

const mergeSort = arr => {
    if (arr.length <= 1) return arr//only triggers at the end of stack when array has been full split
    
    const half = ~~arr.length/2
    let half1 = mergeSort(arr.slice(0, half)),//recursively splits array but recieves merged array as return
        half2 = mergeSort(arr.slice(half, arr.length))
    
    return merger(half1, half2)
}

// console.log(merger([1,3],[2,4,6,8]))
// console.log(merger([1,3,4],[7,8,9]))
console.log(mergeSort([7,5,4,3,2,1]))