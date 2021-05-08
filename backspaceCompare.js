// return whether two strings are equal
// strings can contain backspace characters that indicate removing the previous character

// brute force:
// loop through each string
// if sting[i] === backspace
// use splice to remove 2 characters from i-1
// return t === s

const backspaceCompare = (string1, string2) => {
    string1 = string1.split('')
    string2 = string2.split('')

    for (let i = 0; i < string1.length; i++) {
        if (string1[i] === '#') {
            if (string1[i-1]) {
                string1.splice(i - 1, 2)
                i -= 2
            } else {
                string1.splice(i, 1)
                i -= 1
            }
        }
    }
    for (let i = 0; i < string2.length; i++) {
        if (string2[i] === '#') {
            if (string2[i-1]) {
                string2.splice(i - 1, 2)
                i -= 2
            } else {
                string2.splice(i, 1)
                i -= 1
            }
        }
    }
    return string1.join('') === string2.join('')
}

// o(n) solution
const process = s => {
    const res = [];
    for (x of s.split('')) {
        // if a character, add to result, else if backspace then deleter last character
        x === '#' ? res.pop() : res.push(x);
    }
    return res.join('')
}

console.log(backspaceCompare("ab#c", "ad#c"))
console.log(backspaceCompare("ab##", "c#d#"))
console.log(backspaceCompare("a##c", "#a#c"))
console.log(backspaceCompare("a#c", "b"))