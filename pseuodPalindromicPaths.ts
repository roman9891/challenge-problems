// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/

// Given a binary tree where node values are digits from 1 to 9. 
// A path in the binary tree is said to be pseudo-palindromic 
// if at least one permutation of the node values in the path is a palindrome.
// Return the number of pseudo-palindromic paths going from the root node to leaf nodes.

// Example 1:
// Input: root = [2,3,1,3,1,null,1]
// Output: 2 
// Explanation: The figure above represents the given binary tree. 
// There are three paths going from the root node to leaf nodes: the red path [2,3,3], 
// the green path [2,1,1], and the path [2,3,1]. 
// Among these paths only red path and green path are pseudo-palindromic paths 
// since the red path [2,3,3] can be rearranged in [3,2,3] (palindrome) 
// and the green path [2,1,1] can be rearranged in [1,2,1] (palindrome).

// Example 2:
// Input: root = [2,1,1,1,3,null,null,null,null,null,1]
// Output: 1 
// Explanation: The figure above represents the given binary tree. 
// There are three paths going from the root node to leaf nodes: the green path [2,1,1], the path [2,1,3,1], 
// and the path [2,1]. Among these paths only the green path is pseudo-palindromic 
// since [2,1,1] can be rearranged in [1,2,1] (palindrome).

// Example 3:
// Input: root = [9]
// Output: 1
 
// Constraints:
// The number of nodes in the tree is in the range [1, 105].
// 1 <= Node.val <= 9

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

const pseudoPalindromicPaths = (root: TreeNode | null): number => {
    // DFS
    // run possiblePalindrome on each path
    // if true increment result
    // return result
    if (!root) return 0

    let result = 0
    const path: number[] = []

    const traverse = node => {
        path.push(node.value)

        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
        // node with neither left nor right marks end of a path
        if (!node.left && !node.right) possiblePalindrome(path) ? result++ : null
        // pop before removing from stack to appropriately adjust the path as traversal continues
        path.pop()
    }

    traverse(root)

    return result
}

const possiblePalindrome = (path: number[]): boolean => {
    // track frequency of each number
    // if more than one value occurs an odd number of times return false
    const frequencyTracker: {[key: string]: number} = {}

    path.forEach(value => frequencyTracker[value] ? frequencyTracker[value] ++ : frequencyTracker[value] = 1)

    const oddValues = Object.values(frequencyTracker).filter(value => value % 2 !== 0)

    return oddValues.length <= 1
}

// console.log(pseudoPalindromicPaths())
// console.log(pseudoPalindromicPaths())
// console.log(pseudoPalindromicPaths())