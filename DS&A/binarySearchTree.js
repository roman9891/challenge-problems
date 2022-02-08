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
}

let bst = new BinarySearchTree()
bst.root = new Node(10)

console.log(bst)

bst.insert(5)
bst.insert(15)
bst.insert(7)

console.log(bst.insert(5))

console.log(bst.find(4))