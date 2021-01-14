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

    get(index){
        if (index < 0 || index > this.length) return null
        let current = this.head,
            i = 0
        while (i < index) {
            current = current.next
            i++
        }
        return current
    }

    set(index, value){
        if (this.get(index)) {
            this.get(index).value = value
            return true
        } else {
            return false
        }
    }

    insert(index, value){
        if (index < 0 || index > this.length) return false
        else if (index === this.length) !!this.push(val)
        else if (index === 0) !!this.unshift(val)
        
        let newNode = new Node(value),
            pre = this.get(index-1)

        newNode.next = pre.next
        pre.next = newNode
        this.length++

        return true
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined
        else if (index === this.length - 1) return this.pop()
        else if (index === 0) return this.shift()

        let previousNode = this.get(index - 1), 
            removedNode = this.get(index)
        
        previousNode.next = removedNode.next
        this.length--
        return current.value
    }

    reverse(){
        this.tail = this.head
        let current = this.tail.next
        this.tail.next = null
        let pre = this.tail
        let store = current.next

        // current.next = pre
        // pre = current
        // current = store
        // store = current.next

        while (current) {
            current.next = pre
            pre = current
            current = store
            store = current?.next
        }

        this.head = pre

        return this
    }

    print(){
        let list = [this.head.value],
            current = this.head

        if (this.head.value) {
            while (current.next) {
                list.push(current.next.value)
                current = current.next
            }
        }

        return list
    }
}

const list = new SinglylinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
console.log(list.reverse(), list.print())