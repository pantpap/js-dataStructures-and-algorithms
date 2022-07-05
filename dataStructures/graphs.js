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

    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
            return true;
        }
        return false;
    }

    removeVertex(vertex){
        if(!this.adjacencyllist[vertex]) return undefined
        while(this.adjacencyList[vertex].length){
            let temp = this.adjacencyList.pop();
            this.removeEdge(vertex, temp);
                
        }
        delete this.adjacencyList[vertex];
        return this;
    }
}