// given node head
// determine if there is a loop in the linked list
// such that there is a point that continuously is reached from tail.next

// point to starting node
// while node.next
// if current node = starting node return true
// if loop finishes return false

const hasCycle = head => {
    let p1 = head, p2 = head

    // conditional requires p2.next to be defined so that p2.next.next doesn't throw an error
    while (p2 && p2.next) { 
        p1 = p1.next
        p2 = p2.next.next
        // must move both points since can not assume that head is part of loop
        // therefore if you leave one pointer at head and the other pointer enters the loop
        // it will never meet head again
        // so instead move both pointers but one pointer at 2x rate so that it will "lap" the other pointer
        if (p1 === p2) return true
    }

    return false
}