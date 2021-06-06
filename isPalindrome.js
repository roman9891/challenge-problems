// given a string
// return true if palindrome
// ignoring spaces and punctuation and capitalization

// split string
// filter for alphanumeric
// toLowerCase
// === .reverse

const isPalindrome = string => {
    string = string.toLocaleLowerCase().split('').filter(char => char.match(/[A-Za-z0-9]/g)).join('')
    let reverse = string.toLocaleLowerCase().split('').filter(char => char.match(/[A-Za-z0-9]/g)).reverse().join('')
    return string === reverse
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))