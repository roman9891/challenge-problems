class BinaryHeap {
    constructor() {
        this.values = []
    }

    insert(value) {
        this.values.push(value)

        this.bubbleUp()

        return this.values
    }

    bubbleUp() {
        let childIndex = this.values.length - 1
        let child = this.values[childIndex]
        let parentIndex = Math.floor((childIndex - 1) / 2)
        let parent = this.values[parentIndex]

        while (parent && child > parent) {
            let store = parent
            this.values[parentIndex] = child
            this.values[childIndex] = store 

            childIndex = parentIndex
            child = this.values[childIndex]
            parentIndex = Math.floor((childIndex - 1) / 2)
            parent = this.values[parentIndex]
        }
    }

    extractMax() {
        // let store = this.values[0]
        // this.values[0] = this.values[this.values.length - 1]
        // this.values[this.values.length - 1] = store
        // let result = this.values.pop()

        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return max
    }

    sinkDown() {
        let index = 0
        const length = this.values.length
        const element = this.values[0]

        while(true) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let leftChild, rightChild
            let swap = null

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex]
                if (leftChild > element) swap = leftChildIndex
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightChildIndex
                }
            }
            if (swap === null) break
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

const binaryHeap = new BinaryHeap()

binaryHeap.insert(41)
binaryHeap.insert(39)
binaryHeap.insert(33)
binaryHeap.insert(18)
binaryHeap.insert(27)
binaryHeap.insert(12)
binaryHeap.insert(55)
console.log(binaryHeap.extractMax())
console.log(binaryHeap.extractMax())
console.log(binaryHeap)

let ER = new PriorityQueue()
ER.enqueue("common cold", 5)
ER.enqueue("cf", 1)
ER.enqueue("comsdf", 4)
ER.enqueue("comsdf", 2)
ER.enqueue("comsdf", 3)


console.log(ER.dequeue())