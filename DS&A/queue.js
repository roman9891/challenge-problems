class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(value){
        const newNode = new Node(value)
        if (this.size === 0) {
            this.first = newNode, this.last = newNode
        } else {
            this.last.next = newNode, this.last = newNode
        }
        return ++this.size
    }
    dequeue(){
        if (this.size === 0) return null
        const removedNode = this.first
        if (this.size === 1) {
            this.first = null, this.last = null
        } else {
            this.first = removedNode.next
            removedNode.next = null
        }
        this.size--
        return removedNode.value
    }
}

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue)

console.log(queue.dequeue(), queue.dequeue(), queue.dequeue())

console.log(queue)