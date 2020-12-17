const binarySearch = (array, value) => {

    const mid = ~~(array.length/2)

    console.log(mid, array[mid])

    if (array[mid] === value) return mid 

    else if (array[mid] < value) return binarySearch(array.slice(mid), value) 

    else if (array[mid] > value) return binarySearch(array.slice(0,mid), value)

    return -1
}

const binarySearch2 = (array, value) => {

    const mid = ~~(array.length/2)

    while (array.length > 1) {

        if (array[mid] === value) return mid 

        else if (array[mid] < value) mid = ~~(array.splice(mid).length/2)

        else if (array[mid] > value) mid = ~~(array.splice(0,mid).length/2)
    }

    return -1
}

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

console.log(nativeSearch2('hello hel', 'zll'))