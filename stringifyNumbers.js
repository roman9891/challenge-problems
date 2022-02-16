// takes an object
// returns an object with all numbers converted to strings
// should not modify existing object

// for in loop through object
// if object key is a number turn into string
// if object key is object recur

const stringifyNumbers = object => {
    let newObject = {...object}
    for (const key in newObject) {
        console.log(object[key])
        if (typeof newObject[key] === 'number') newObject[key] = newObject[key].toString()
        if (typeof newObject[key] === 'object' && !Array.isArray(newObject[key])) newObject[key] = stringifyNumbers(newObject[key])
        // if (typeof newObject[key] === 'object') newObject[key] = stringifyNumbers(newObject[key])
    }
    return newObject
}

const collectStrings = object => {
    const strings = []

    Object.values(object).forEach(value => {
        if (typeof value === 'string') strings.push(value)
        if (typeof value === 'object') strings.push(...collectStrings(value)) 
    })
    
    return strings
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

const obj2 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

// console.log(stringifyNumbers(obj))

console.log(collectStrings(obj2))

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }