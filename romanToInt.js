// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Given a roman numeral, convert it to an integer.

// PSEUDO:
// iterate through string
// if number to left is smaller
// check left till >= number
// subtract that number
// recursively check this way to the left
// add the difference
// otherwise add the number
// return sum

// failed solution
// const romanToInt = (str) => {
//     let convertedValue = 0
//     const letters = [...str]
//     const romanNumerals = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//     }
//     const convertedArray = letters.map(letter => romanNumerals[letter])

//     for (let i = 0; i < convertedArray.length; i++) {
//         if (convertedArray[i+1]) {
//             if (convertedArray[i+1] < convertedArray[i]) {
//                 convertedValue += convertedArray[i] + (convertedArray[i+2] - convertedArray[i+1])
//                 i += 2
//             } else if (convertedArray[i+1] > convertedArray[i]) {
//                 convertedValue += convertedArray[i+1] - convertedArray[i]
//                 i += 1
//             } else convertedValue += convertedArray[i]
//         }
//         else convertedValue += convertedArray[i]
//     }
//     return convertedValue
// }

// looked up solution
var romanToInt = function(s) {  
    const roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    const value = ['1', '5', '10', '50', '100', '500', '1000']
    let previousCharPos = -1
    let runningTotal = 0
    for(let i = s.length - 1; i >= 0; i--){
        const index = roman.indexOf(s[i])
        runningTotal += value[index] * (index >= previousCharPos ? 1 : -1)
        previousCharPos = index
    }
    
    return runningTotal
};

console.log(romanToInt("MCMXCIV"))