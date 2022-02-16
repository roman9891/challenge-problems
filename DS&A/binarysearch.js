function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}
//
//     console.log(array,value)
//     const mid = ~~(array.length/2)

//     if (array[mid] === value) return mid 

//     else if (array[mid] < value) return binarySearch(array.slice(mid), value) 

//     else if (array[mid] > value) return binarySearch(array.slice(0,mid), value)

//     return -1
// }

// ^^ incorrect because it reduces array size each time until eventually can only return 0 or 1 index value instead of actual index

// const binarySearch2 = (array, value) => {

//     const mid = ~~(array.length/2)

//     while (array.length > 1) {

//         if (array[mid] === value) return mid 

//         else if (array[mid] < value) mid = ~~(array.splice(mid).length/2)

//         else if (array[mid] > value) mid = ~~(array.splice(0,mid).length/2)
//     }

//     return -1
// }

const nativeSearch = (str, substr) => {
    
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === substr[0]) {
            let innerCount = 1
            for (let j = 1; j < substr.length; j++) {
                if (substr[j] === str[i+j]) {
                    innerCount ++
                    if (innerCount === substr.length) count++
                }
            }
        }
    }

    return count
}

const nativeSearch2 = (str, substr) => {
    
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === substr[0]) {
            for (let j = 1; j < substr.length; j++) {
                if (substr[j] !== str[i+j]) break
                if (j === substr.length - 1) count++
            }
        }
    }

    return count
}

console.log(binarySearch([1,2,3,4,5], 5))