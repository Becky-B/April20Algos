class BSNode {
    // each node in a binary search tree contains a value, a pointer to the node to the left, and a pointer to the node to the right
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BSTree {
    constructor(){
        this.root = null;
    }


    // write an algorithm that can determine whether or not a binary search tree is empty.
    isEmpty() {
        if(this.root == null) {
            return true;
        }
        return false;
    }


    // write an algorithm that will find the smallest number in a binary search tree
    min(){
        if(this.isEmpty()) {
            return false;
        }
        let runner = this.root;
        while(runner.left != null) {
            runner = runner.left;
        }
        return runner.value;
    }

    // write an algorithm that will find the largest number in a binary search tree
    max() {
        if(this.isEmpty()) {
            return false;
        }
        let runner = this.root;
        while(runner.right != null) {
            runner = runner.right;
        }
        return runner.value;
    }

    // 4/28 BONUS: Write an algorithm that can determine whether or not the binary search tree
    // contains a node with a given value
    contains(value, runner = this.root) {
        if(runner == null)
            return false;
        else if(value == runner.value)
            return true;
        else if(value < runner.value)
            return this.contains(value, runner.left);
        else 
            return this.contains(value, runner.right);
    }


    // Write an algorithm that will add a new node to a Binary Search Tree
    add(value) {

    }

    // Write an algorithm that will find the minimum value of the right subtree
    minRight() {
        
    }


    // Write an algorithm that will find the maximum value of the left subtree
    maxLeft() {

    }
}