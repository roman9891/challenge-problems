// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

const removeNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
    return head
}

// console.log(removeNthFromEnd([1,2,3,4,5], 2)) // [1,2,3,5]
// console.log(removeNthFromEnd([1], 1)) // []
// console.log(removeNthFromEnd([1,2], 1)) // [1]