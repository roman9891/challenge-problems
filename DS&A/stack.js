class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    push(value){
        var newNode = new Node(value)
        if (!this.first) {
            this.first = newNode, this.last = newNode
        } else {
            newNode.next = this.first
            this.first = newNode
        }
        return ++this.size
    }
    pop(){
        if (this.size === 0) return null
        let removedNode = this.first
        if (this.size === 1) {
            this.first = null, this.last = null
        } else {
            this.first = removedNode.next
        }
        this.size--
        return removedNode.value
    }
}

let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack)
console.log(stack.pop(), stack.pop(), stack.pop())
console.log(stack)
