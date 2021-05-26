// given string with letters in even index and digits in odd index
// replace digits with the letter before it shifted ahead by value of digit

// loop through string
// while index is even push value into result
// while odd push char code of i-1 + i
// return result

const replaceDigits = string => {
    let result = ''

    for (let i = 0; i < string.length; i++) {
        i % 2 === 0 ? result += string[i] : result += String.fromCharCode(string.charCodeAt(i - 1) + parseInt(string[i]))
    }

    return result
}

console.log(replaceDigits("a1c1e1"))
console.log(replaceDigits("a1b2c3d4e"))