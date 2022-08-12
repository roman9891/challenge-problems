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
    // BFS traversal of tree
    // save visited list
    // filter list of null values
    // create tree based on filtered list
    // BFS traversal of new tree
    // compare new list to unfiltered original list

    const originalTreeArray = breadthFirstSearch(root)
    const filteredOriginalTree = originalTreeArray.filter(value => value)
    const newTreeRoot = new TreeNode(originalTreeArray[0])

    for (let i = 1; i < originalTreeArray.length; i++) {}

    const newTreeArray = breadthFirstSearch(newTreeRoot)

    return originalTreeArray.join('') === newTreeArray.join('')
}

//console.log(isValidBST([2,1,3])) // true
//console.log(isValidBST([5,1,4,null,null,3,6])) // false

