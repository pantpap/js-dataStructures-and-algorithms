class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {

        // NOTES 
        // create newNode
        // if root === null then root = newNode
        // let temp = this.root
        // while loop
        //     if newNode === temp return undefined
        //     if < go left else > go right
        //      if there is a free spot insert newNode else move to next

        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        } 
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) return undefined;
            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if(temp.right === null){
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }

        // let myTree = new BinarySearchTree();
        // myTree.insert(47)
        // myTree.insert(21)
        // myTree.insert(76)
        // myTree.insert(18)

        // myTree.insert(52)
        // myTree.insert(82)
        //  after creation we will insert newNode 27 and will be below 18
    }

    contains(value){
        if(this.root === null) return false;
        let temp = this.root;
        while(temp){
            if (value < temp.value){
                temp = temp.left;
            } else if(value > temp.value){
                temp = temp.right;
            } else {
                return true;
            }
        }
        return false;

         // let myTree = new BinarySearchTree();
        // myTree.insert(47)
        // myTree.insert(21)
        // myTree.insert(76)
        // myTree.insert(18)
        // myTree.insert(27)
        // myTree.insert(52)
        // myTree.insert(82)
    }

    findMinValueNode(currentNode){
        while(currentNode.left){
            currentNode = currentNode.left;
        }
        return currentNode;
         // let myTree = new BinarySearchTree();
        // myTree.insert(47)
        // myTree.insert(21)
        // myTree.insert(76)
        // myTree.insert(18)
        // myTree.insert(27)
        // myTree.insert(52)
        // myTree.insert(82)

        // find min value of the tree
        // myTree.findMinValueNode(myTree.root)

        // find minValue of a subTree
        // myTree.findMinValueNode(myTree.root.right)
    }
}

let myTree = new BinarySearchTree();
myTree;