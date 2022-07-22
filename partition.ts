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

const partition = (head: Node | null, x: number): Node | null => {
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

    return null
}
