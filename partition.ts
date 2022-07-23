// https://leetcode.com/problems/partition-list/

// 86. Partition List
// Medium

// 4292

// 544

// Add to List

// Share
// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

 

// Example 1:


// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]
// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]
 

// Constraints:

// The number of nodes in the list is in the range [0, 200].
// -100 <= Node.val <= 100
// -200 <= x <= 200

const partition = (head: ListNode | null, x: number): ListNode | null => {
    // use three reference points
    // low: end of low list
    // high: end of high list
    // mid: beginning of high list
    // iterate through list
    // if value is above x
    // if there's already high, high => current, high = current
    // if there's no mid, mid = current
    // else, high = current
    // same for low except mid part
    // at end of list, low => mid
    // return list
    let first: ListNode | undefined, low: ListNode | undefined, mid: ListNode | undefined, high: ListNode | undefined
    let current = head

    while (current) {
        
        if (current.value >= x) {
            if (!mid) mid = current

            if (high) {
                high.next = current
            }

            high = current
        } else {
            if (!first) first = current

            if (low) {
                low.next = current
            }
            low = current
        }
        current = current.next
    }

    if (low && mid) low.next = mid
    else if (mid) first = mid
    if (high) high.next = null

    return first ? first : null
}

class ListNode {
    next: ListNode | null

    constructor(public value: number) {}
}

const compileList = (list: number[]): ListNode => {
    let head = new ListNode(list[0])
    let current = head

    for (let i = 1; i < list.length; i++) {
        current.next = new ListNode(list[i])
        current = current.next
    }

    return head
}

let head = compileList([1,4,3,2,5,2])

const node = partition(head, 3)
console.log(node?.next)
console.log(node?.next?.next)
console.log(node?.next?.next?.next)
console.log(node?.next?.next?.next?.next)
console.log(node?.next?.next?.next?.next?.next)