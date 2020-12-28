const maxGold = arr => {
    let result = 0

    arr = bubbleSort(arr)

    for (let i = arr.length - 2; i > (arr.length/3 - 1); i-=2) {
        result += arr[i]
    }
    
    return result
}

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

console.log(maxGold([2,4,1,2,7,8]))
console.log(maxGold([2,4,5]))
console.log(maxGold([9,8,7,6,5,1,2,3,4]))