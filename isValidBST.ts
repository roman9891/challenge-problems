// https://leetcode.com/problems/validate-binary-search-tree/

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input: root = [2,1,3]
// Output: true

// Example 2:
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
 
// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

const isValidBST = (root: TreeNode | null): boolean => {
    // BFS
    // add each value to queue
    // loop through queue
    // while at each value check:
        // if left exists and and left is less and if right exists and right is greater
        // if invalid break and return false
    // otherwise return true outside the loop once entire tree has been successfully traversed


    // breadthFirstSearch() {
    //     if (!this.root) return []

    //     let current = this.root
    //     const queue = [current]
    //     const visited = []

    //     while (queue.length) {
    //         current = queue.shift()
    //         visited.push(current.value)

    //         if (current.left) queue.push(current.left)
    //         if (current.right) queue.push(current.right)
    //     }

    //     return visited
    // }
    
    return true
}

//console.log(isValidBST([2,1,3])) // true
//console.log(isValidBST([5,1,4,null,null,3,6])) // false
