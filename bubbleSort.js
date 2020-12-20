const bubbleSort = arr => {
    let iterations = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
            iterations++
        }
    }
    console.log(iterations)
    return arr
}

console.log(bubbleSort([12,23,45,3,1,324]))
console.log(bubbleSort([23,5,4,655,213,45,7]))
console.log(bubbleSort([5,4,3,2,1]))
