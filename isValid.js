// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = s => {
    const tracker = []
    const openingBrackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    const closingBrackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    
    for (let bracket of s) {
        let last = tracker[tracker.length - 1]
        
        if (openingBrackets[bracket]) {
            tracker.push(bracket)
        } else {
            if (last !== closingBrackets[bracket]) return false
            else tracker.pop()
        }   
    }
    return !tracker.length
}