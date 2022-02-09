class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)

        if (!this.root) this.root = newNode
        else {
            let root = this.root
            let searching = true

            while (searching) {
                if (newNode.value === root.value) return undefined
                if (value > root.value) {
                    if (root.right) root = root.right
                    else {
                        root.right = newNode
                        searching = false
                    }
                } else if (value < root.value) {
                    if (root.left) root = root.left
                    else {
                        root.left = newNode
                        searching = false
                    }
                }
            }
        }
        return this
    }

    find(value) {
        if (!this.root) return null

        else {
            let root = this.root
            while (true) {
                if (value === root.value) return root
                if (value > root.value) {
                    if (root.right) root = root.right
                    else return null
                } else if (value < root.value) {
                    if (root.left) root = root.left
                    else return null
                }
            }
        }
    }

    breadthFirstSearch() {
        if (!this.root) return []

        let current = this.root
        const queue = [current]
        const visited = []

        while (queue.length) {
            current = queue.shift()
            visited.push(current.value)

            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }

        return visited
    }

    DFSpreOrder() {
        if (!this.root) return []

        const data = []
        const traverse = node => {
            data.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)

        return data
    }

    DFSpostOrder() {
        if (!this.root) return []

        const data = []
        const traverse = node => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(this.root)

        return data
    }

    DFSinOrder() {
        if (!this.root) return []

        const data = []
        const traverse = node => {
            if (node.left) traverse(node.left)
            data.push(node.value)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)

        return data
    }
}

let bst = new BinarySearchTree()
bst.root = new Node(10)

console.log(bst)

bst.insert(6)
bst.insert(15)
bst.insert(3)
bst.insert(8)
bst.insert(20)

console.log(bst.breadthFirstSearch())
console.log(bst.DFSpreOrder())
console.log(bst.DFSpostOrder())
console.log(bst.DFSinOrder())