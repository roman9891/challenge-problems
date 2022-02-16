// takes object
// returns sum of all even values nested inside object

// return reduced sum of all values in object
// reducer if a is even value add it to sum otherwise if its an object recurse

const nestedEvenSum = object => Object.values(object).reduce(reducer)


const reducer = (a, b) => {
    let sum = 0

    if (typeof a === 'object') sum += nestedEvenSum(a)
    else if (typeof a === 'number' && a % 2 === 0) sum += a

    if (typeof b === 'object') sum += nestedEvenSum(b)
    else if (typeof b === 'number' && b % 2 === 0) sum += b

    return sum
}

const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
        }
    }
}
  
const obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};


console.log(nestedEvenSum(obj1))
console.log(nestedEvenSum(obj2))