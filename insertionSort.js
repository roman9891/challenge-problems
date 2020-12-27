//sort the array onto its left half
//start by considering a[0] sorted and start with a[i]
//compare leftwards till you find the first item its bigger than or the end of array

const insertionSort = arr => {
    for (i = 1; i < arr.length; i ++) {
        let current = arr[i] //sets value that will compare against preceeding values
        for (j = i - 1; j >= 0 && arr[j] > current; j--) { //starting from left of i until beginning of array or 
            let x = arr[j]
            if (current < x) {
                arr[j+1] = arr[j]
            }
        }
        arr[j+1] = current
    }
    return arr
}

console.log(insertionSort([5,4,3,2,1]))
console.log(insertionSort([4,9,28,7,1,10]))
console.log(insertionSort([3,4,1,6,4,5,3,9,]))