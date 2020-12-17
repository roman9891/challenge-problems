///////////////////Q2 -------15 mins
// sort an integer array in the order of all even numbers in the first half + odd second part. 
// And each part sorted in ascending order.
// in place sort
// input: int[] a = {1,2,5,6,7,3,4};
// output: a={2,4,6,1,3,5,7}

const sortedArray = arr => {
    let p1 = 0, p2 = arr.length - 1, oddStart

    while (p1 < p2) {
        if (arr[p1] % 2 !== 0) {
            if (arr[p2] % 2 === 0) {
                let temp = arr[p2]
                arr[p2] = arr[p1]
                arr[p1] = temp
            } else {
                p2--
            }
        } else {
            p1++
        }  
    }
    
    arr[p1] % 2 ===  0 ? oddStart  = p1+1 : oddStart = p1

    let swap = true

    while (swap) {
        p1 = 0
        p2 = 1
        swap = false

        while (p2 < oddStart) {
            if (arr[p1] > arr[p2]) {
                let temp = arr[p1]
                arr[p1] = arr[p2]
                arr[p2] = temp
                swap = true
            }
            p1++
            p2++
        }
    }

    swap = true

    while (swap) {
        p1 = oddStart
        p2 = p1+1
        swap = false

        while (p2 < arr.length) {
            if (arr[p1] > arr[p2]) {
                let temp = arr[p1]
                arr[p1] = arr[p2]
                arr[p2] = temp
                swap = true
            }
            p1++
            p2++
        }
    }

    return arr
}

console.log(sortedArray([1,2,3,4,5,6]))
console.log(sortedArray([1,2,5,6,7,3,4]))
console.log(sortedArray([2,4]))