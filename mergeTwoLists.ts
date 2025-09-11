

/**
 * 
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
    }
}

const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
    // fast forwards for null lists
    if (!list1 && !list2) return null
    if (!list1) return list2
    if (!list2) return list1

    // initialize head with lower node
    let head

    if (list1.val < list2.val) {
        head = list1
        list1 = list1.next
    } else {
        head = list2
        list2 = list2.next
    }

    let originalHead = head

    // while both lists have values assign lower node to head list
    while (list1 && list2) {
        if (list1.val < list2.val) {
            head.next = list1
            list1 = list1.next
        } else {
            head.next = list2
            list2 = list2.next
        }

        head = head.next
    }

    // assign whatever list remains to head list
    if (list1) head.next = list1
    if (list2) head.next = list2

    return originalHead
}