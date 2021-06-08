const isPalindrome = require('./isPalindrome.js')

test('returns true or false', () => {
    expect(typeof isPalindrome('asdasd')).toBe("boolean")
})

test('returns true for real palindrome', () => {
    expect(isPalindrome('A man A plan a canal Panama')).toBe(true) 
})

test('returns false for non-palindromes', () => {
    expect(isPalindrome('A man A plan an anal Panama')).toBe(true) 
})