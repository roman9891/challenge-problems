/*
https://leetcode.com/problems/valid-parentheses/description/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/
function isValid(s: string): boolean {
    const openingBrackets = {
        "(": true,
        "{": true,
        "[": true
    }

    // uses opening bracket as its value for easy memory of "correct" pair
    const closingBrackets = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    // exit immediately if the first item is closing bracket
    if (closingBrackets[s[0]]) return false

    // array as stack to track and evaluate opening bracket in LIFO order
    // initialized with first item in string
    const tracker = [s[0]]

    for (let i = 1; i < s.length; i++) {
        const currentTrackedBracket = tracker[tracker.length - 1]
        const currentItem = s[i]
        const isOpeningBracket = openingBrackets[currentItem]
        const isClosingBracket = closingBrackets[currentItem]
        const correctClosingBracket = isClosingBracket === currentTrackedBracket

        if (isOpeningBracket) {
            tracker.push(currentItem)
        } else if (isClosingBracket) {
            if (correctClosingBracket) {
                tracker.pop()
            } else {
                return false
            }
        }
    }

    return tracker.length === 0
};