class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value){ // O(1) time complexity
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }
}

// create an new linked list
let myLinkedList = new LinkedList(7);
// push a new node on the list
myLinkedList.push(4);

// Create a snippet in you broswer and run it console