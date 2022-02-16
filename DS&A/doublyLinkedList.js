class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if (this.length === 0) return undefined
        let store = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.length--
        store.next = null
        store.prev = null
        return store
    }
    shift(){
        if (this.length === 0) return undefined
        let store = this.head
        if (this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.head = store.next
            this.head.prev = null
            store.next = null
        }
        this.length--
        return store
    }
    unshift(val){
        let newNode = new Node(val)
        if (this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index){
        if (index < 0 || index >= this.length) return undefined
        let currentNode, currentIndex
        if ((index + 1) > this.length/2) {
            currentIndex = this.length - 1
            currentNode = this.tail
            while (currentIndex !== index) {
                currentNode = currentNode.prev
                currentIndex--
            }
        } else {
            currentIndex = 0
            currentNode = this.head

            while (currentIndex !== index){
                currentNode = currentNode.next
                currentIndex++
            }
        }
        return currentNode
    }
    
    set(index, value){
        let node = this.get(index)
        if (node){
            node.value = value
            return true
        } 
        return false
    }

    insert(index, value){
        if (index === this.length) !!this.push(value)
        if (!this.get(index)) return false
        if (index === 0) !!this.unshift(value)
        
        let newNode = new Node(value),
            right = this.get(index),
            left = right.prev

        left.next = newNode
        right.prev = newNode
        newNode.prev = left
        newNode.next = right

        this.length++

        return true
        
    }

    remove(index){
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        if (index < 0 || index >= this.length) return this.get(index)

        let removedNode = this.get(index),
            left = removedNode.prev,
            right = removedNode.next

        left.next = right
        right.prev = left

        removedNode.prev = null
        removedNode.next = null

        this.length--

        return removedNode
    }
    reverse() {
        const values = []
        let next = this.tail

        while (next) {
            values.push(next.value)
            next = next.prev
        }

        console.log(values)

        this.head = null
        this.tail = null
        this.length = 0

        values.forEach(value => this.push(value))

        return this
    }
}

const list = new DoublyLinkedList()

list.push(0)
list.push(1)
list.push(2)
list.push(3)

console.log(list.remove(4),list)
console.log(list.reverse())