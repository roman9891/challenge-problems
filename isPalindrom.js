// given node head
// determine whether linked list is a palindrome
// values are 0 through 9

// create tracking object
// while next is defined
//  add 1 to length
// while next is defined and under half length
//  if under half length add value to string
//  if over half length and if current value matches last letter pop last letter
//  else return false
// return !! string

const isPalindrome = head => {
    let result = [], length = 1, currentNode = head

    while (currentNode.next) {
        currentNode = currentNode.next
        length++
    }
    
    if (length === 1) return true
    
    currentNode = head
    let isMiddleValue = length % 2

    for (let i = 1; i <= length; i++) {
        if (i <= length/2) result.push(currentNode.val)
        else if (isMiddleValue) isMiddleValue = 0
        else {
            if (result[result.length - 1] === currentNode.val) {
                result.pop()
            }
            else return false
        }
        currentNode = currentNode.next
    }

    return !result.length
}

// simpler solution

var isPalindrome = function(head) {
    let node = head
    let arr = []
    
    while(node){
        arr.push(node.val)
        node = node.next
    }
    
    return arr.join('') === arr.reverse().join('')
};

// minimal space

var isPalindrome = function(head) {
    let slow = head, fast = head, prev, temp
    while (fast && fast.next)
        slow = slow.next, fast = fast.next.next
    prev = slow, slow = slow.next, prev.next = null
    while (slow)
        temp = slow.next, slow.next = prev, prev = slow, slow = temp
    fast = head, slow = prev
    while (slow)
        if (fast.val !== slow.val) return false
        else fast = fast.next, slow = slow.next
    return true
};

console.log(isPalindrome([1,2,2,1]))
console.log(isPalindrome([1,2]))