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
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined//if list is empty return undefined

        let current = this.head, 
            pre = current

        while (current.next) {//traverse list until there is no next and keep track of previous node
            pre = current
            current = current.next
        }

        this.tail = pre//previous becomes new tail
        this.tail.next = null//this severs connection to previous tail
        this.length--

        if (this.length === 0) {//reset list if last item popped
            this.head = null
            this.tail = null
        }

        return current
    }

    shift(){
        if (!this.head) return undefined 

        let head = this.head
        this.head = head.next
        head.next = null//this line not necessary?
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        return head
    }

    unshift(val){
        let newNode = new Node(val)

        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++

        return this
    }
}

const list = new SinglylinkedList()
list.push(1)
list.push(2)
list.push(3)
console.log(list)
list.pop()
list.unshift(9)
console.log(list.unshift(8))