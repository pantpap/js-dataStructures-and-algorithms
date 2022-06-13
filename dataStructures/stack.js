class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value){
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value){
        if(this.length === 0){
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }
}

let myStack = new Stack(11);