// https://leetcode.com/problems/palindrome-linked-list/

// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false
 
// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

class ListNode {
    next: ListNode | null
    constructor (public value: number) {
        this.value = value
    }
}

const isPalindromeLinkedList = (head: ListNode | null): boolean => {
    return true
}

//console.log(isPalindromeLinkedList([1,2,2,1])) // true
//console.log(isPalindromeLinkedList([1,2])) // false