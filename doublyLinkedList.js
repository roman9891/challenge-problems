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

        if ((index + 1) > this.length/2) {
            let currentIndex = this.length - 1,
                currentNode = this.tail
            while (currentIndex !== index) {
                currentNode = currentNode.prev
                currentIndex--
            }
        } else {
            let currentIndex = 0,
                currentNode = this.head

            while (currentIndex !== index){
                currentNode = currentNode.next
                currentIndex++
            }
        }
        return currentNode
    }
}

const list = new DoublyLinkedList()

list.push(0)
list.push(1)
list.push(2)
list.push(3)

console.log(list.get(4))