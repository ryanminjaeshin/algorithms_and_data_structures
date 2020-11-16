class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// const node = new Node(100);
// console.log(node);

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    // Insert last node

    // Insert at index

    // Get at index

    // Get data
}