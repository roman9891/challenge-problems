class Node{
    constructor(val){
        this.value = val
        this.next = null
    }
}

class SinglylinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(value){
        var newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
    }
}