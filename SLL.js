class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLList {
    constructor() {
        this.head = null;
    }

    // Add to front
    addToFront(value) {
        // create the new node we want to add to the front
        var newNode = new SLNode(value);
        // set the new node's next to the current head
        newNode.next = this.head;
        // reassign the head to the new start of the list
        this.head = newNode;
        return this;
    }


    // Remove from front
    removeFromFront() {
        // If the list is empty, there's nothing to remove.
        if(this.head == null){
            return "This list is empty.";
        }
        // set a temporary variable as the head to return the node we're removing
        var temp = this.head;
        // set the head to the next node in the list (this still works if the list is only
        // one element long, as the head's next will be null and a list with a null head is 
        // an empty list)
        this.head = this.head.next;

        // return the removed node
        return temp;
    }


    // Contains. Challenge --> Do this recursively
    contains(value) {
        // return a boolean: if the value is in the list, return true, else return false
    }


    // Remove from the back of a singly linked list
    removeFromBack() {

    }
}