const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let noSwap = true//start true to enter loop at least once
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // - 1 so last index doesn't compare vs undefined
            // - i so that loop shortens as the items at the end get sorted
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]//es2015 syntax for swapping
                noSwap = false//will only trigger if at least one item is out of place
            }
        }
        if (noSwap) break//leave loop early if nothing needed to be swapped
    }
    return arr
}

console.log(bubbleSort([12,23,45,3,1,324]))
console.log(bubbleSort([23,5,4,655,213,45,7]))
console.log(bubbleSort([5,4,3,2,1]))
