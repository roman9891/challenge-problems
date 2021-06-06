// given a string
// return true if palindrome
// ignoring spaces and punctuation and capitalization

// split string
// filter for alphanumeric
// toLowerCase
// === .reverse

const isPalindrome = (string: string) => {
    string = string.split('').filter(char => char.match(/[A-Za-z]/g)).join('').toLocaleLowerCase()
    console.log(string)
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))