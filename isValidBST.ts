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

// const isValidBST = (root: TreeNode | null): boolean => {
    // BFS traversal of tree
    // save visited list
    // filter list of null values
    // create tree based on filtered list
    // BFS traversal of new tree
    // compare new list to unfiltered original list

//     const originalTreeArray = breadthFirstSearch(root)
//     const filteredOriginalTree = originalTreeArray.filter(value => value)
//     const newTreeRoot = new TreeNode(originalTreeArray[0])

//     for (let i = 1; i < originalTreeArray.length; i++) {}

//     const newTreeArray = breadthFirstSearch(newTreeRoot)

//     return originalTreeArray.join('') === newTreeArray.join('')
// }

const isValidBST = (root: TreeNode | null): boolean => {
    if (!root) return true
    if (!root.left && !root.right) return true
    const originalTreeArray = breadthFirstSearch(root)
    const filteredOriginalTree = originalTreeArray.filter(value => value !== null)
    const newTreeRoot = filteredOriginalTree[0] ? new TreeNode(filteredOriginalTree[0]) : null

    for (let i = 1; i < filteredOriginalTree.length; i++) {
        let currentValue = filteredOriginalTree[i]
        if (currentValue !== null) insert(newTreeRoot, currentValue)
    }

    const newTreeArray = breadthFirstSearch(newTreeRoot)
    
    return originalTreeArray.map(value => value === null ? "null" : value).join('') === newTreeArray.map(value => value === null ? "null" : value).join('')
};

const breadthFirstSearch = (root: TreeNode | null): (number | null)[] => {
    if (!root) return []

    let current: TreeNode | undefined | null = root
    const queue: [TreeNode|null] = [current]
    const visited: (number | null)[] = []

    while (queue.length) {
        current = queue.shift()
        if (current) {
            visited.push(current.val)
            if (current.left) queue.push(current.left)
            else queue.push(null)
            if (current.right) queue.push(current.right)
            else queue.push(null)
        }
        else visited.push(null)
    }

    return visited
}

const insert = (root: TreeNode | null, value: number): void => {
    if (root === null) return
    let newNode = new TreeNode(value)

    // if (!this.root) this.root = newNode
        // let root = this.root
    let searching = true

    while (searching) {
        if (newNode.val === root.val) return
        if (value > root.val) {
            if (root.right) root = root.right
            else {
                root.right = newNode
                searching = false
            }
        } else if (value < root.val) {
            if (root.left) root = root.left
            else {
                root.left = newNode
                searching = false
            }
        }
    }
}

//console.log(isValidBST([2,1,3])) // true
//console.log(isValidBST([5,1,4,null,null,3,6])) // false

