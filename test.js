// const countUniqueValues = arr => {
//     const arrObj = {}

//     arr.forEach(value => {
//         arrObj[value] ? arrObj[value] += 1 : arrObj[value] = 1
//     })

//     return Object.keys(arrObj).length
// }

//countUniqueValues([-2,-1,-1,0,1])

const countUniqueValues = arr => {
    let i = 0
    let j = 1

    while (j < arr.length) {
        console.log(`i and j:`, arr[i], arr[j])
        if (arr[i] !== arr[j]) {
            i++
            arr.splice(i, 0, arr[j])
        }
        j++
    }

    console.log(i+1, arr)
}

// countUniqueValues([1,1,1,2,2,3,4,4,4,4,4,4,5])

const sameFrequency = (num1, num2) => {
    if (num1.length !== num2.length) return false

    const obj1 = {}
    const obj2 = {}

    num1.toString().split(``).forEach(num => {
        obj1[num] ? obj1[num] += 1 : obj1[num] = 1
    })

    num2.toString().split(``).forEach(num => {
        obj2[num] ? obj2[num] += 1 : obj2[num] = 1
    })

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) return false
    }

    return true
}

// sameFrequency(182,281)
// sameFrequency(34,14)
// sameFrequency(22,222)
// sameFrequency(3589578,5879385)

function areThereDuplicates() {
    const obj = {}

    for (let i = 0; i < arguments.length; i++){
        if (obj[arguments[i]]) return true
        else obj[arguments[i]] = 1
    }

    return false
}

// console.log(areThereDuplicates(1,1))
// console.log(areThereDuplicates(1,2,3,))
// console.log(areThereDuplicates('a', 'b', 'c', 'c'))

const power = (base, exponent) => {
    if (exponent === 1) return base
    if (exponent === 0) return 1
    return base * power(base, exponent-1)
}

// console.log(power(2,0))
// console.log(power(2,1))
// console.log(power(2,4))
// console.log(power(2,5))

const factorial = (n) => {
    if (n === 0 || n === 1) return 1
    return n * factorial(n-1)
}

// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(3))
// console.log(factorial(4))

const productOfArray = (arr) => arr.length ? (arr[0] * productOfArray(arr.slice(1))) : 1

// console.log(productOfArray([1,2,3,10]))
// console.log(productOfArray([1,2,3]))
// console.log(productOfArray([3,5,7]))

const recursiveRange = n => {
    if (n === 1) return 1
    return n + recursiveRange(n-1)
}

// console.log(recursiveRange(1))
// console.log(recursiveRange(2))
// console.log(recursiveRange(3))
// console.log(recursiveRange(4))

const fib = n => {
    if (n === 1 || n === 2) return 1 
    return fib(n-1) + fib(n-2)
}

// console.log(fib(1))
// console.log(fib(2))
// console.log(fib(3))
// console.log(fib(4))
// console.log(fib(5))

const reverse = string => {
    if (!string.length) return ''

    return string.slice(-1) + reverse(string.slice(0,-1))
}

// console.log(reverse('rithmschool'))

const isPalindrome = string => string === reverse(string)

// console.log(isPalindrome('hi'))
// console.log(isPalindrome('hih'))

const someRecursive = (array, callback, index = 0) => {
    if (callback(array[index])) return true

    return index < array.length-1 ? someRecursive(array, callback, index+1) : false
}

// const isOdd = val => val % 2 !== 0

// console.log(someRecursive([4,6,8], val => val > 10))

