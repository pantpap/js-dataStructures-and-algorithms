class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }

    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(this.adjacencyList[vertex2]);
            this.adjacencyList[vertex2].push(this.adjacencyList[vertex1]);
            return true;
        }
        return false;
    }
}