class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.remove(this.adjacencyList[vertex1], vertex2)
        this.remove(this.adjacencyList[vertex2], vertex1)
    }

    remove(array, item) {
        const index = array.indexOf(item)
        array.splice(index,1)
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(otherVertex => this.removeEdge(vertex, otherVertex))
        delete this.adjacencyList[vertex]
    }

    DFSr(vertex) {
        const result = []
        const visited = {}
        const traverse = vertex => {
            if (!this.adjacencyList[vertex].length) return
            visited[vertex] = true
            result.push(vertex)
            for (const connection of this.adjacencyList[vertex]) {
                if (!visited[connection]) traverse(connection)
            }
        }

        traverse(vertex)

        return result
    }

    DFSi(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor)
               } 
            });
        }
        return result;
    }

    BFS(start) {
        const queue = [start]
        const visited = {}
        const result = []
        visited[start] = true

        while (queue.length) {
            let visiting = queue.shift()
            result.push(visiting)
            this.adjacencyList[visiting].forEach(connection => {
                if (!visited[connection]) {
                    visited[connection] = true
                    queue.push(connection)
                }
            })
        }
        return result
    }
}

const g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g.BFS("A"))