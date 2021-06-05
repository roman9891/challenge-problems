// given 2 strings and a target string
// consisting of letters a through j
// return whether the converted value of the two strings equals the targets converted value
// each letter converts to the index value of its place in the alphabet
// each strings value equals the integer conversion of all its concatenated values

// create string a-j
// loop through each word
// for each letter push into new string the index value of that letter
// return s1 + s2 === s3

const isSumEqual = (string1, string2, targetString) => {
    const alpha = 'abcdefghij'
    // let value1 = '', value2= '', value3 = ''

    const convert = string => parseInt(string.split('').map(char => alpha.indexOf(char)).join(''))

    // for (let i = 0; i < string1.length; i++) {
    //     let currentCharacter = string1[i]
    //     let indexValue = alpha.indexOf(currentCharacter)
    //     value1 += indexValue
    // }
    // for (let i = 0; i < string2.length; i++) {
    //     let currentCharacter = string2[i]
    //     let indexValue = alpha.indexOf(currentCharacter)
    //     value2 += indexValue
    // }
    // for (let i = 0; i < targetString.length; i++) {
    //     let currentCharacter = targetString[i]
    //     let indexValue = alpha.indexOf(currentCharacter)
    //     value3 += indexValue
    // }

    // return parseInt(value1) + parseInt(value2) === parseInt(value3)
    return convert(string1) + convert(string2) === convert(targetString)
}

console.log(isSumEqual("acb", "cba", "cdb"))
console.log(isSumEqual("aaa", "a", "aab"))
console.log(isSumEqual("aaa", "a", "aaaa"))