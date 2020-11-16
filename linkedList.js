// Create Node to be linked
// Whenever we create new node, we instanciating.
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

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

    // Print data
    printData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(500);
ll.insertFirst(300);
ll.insertFirst(200);
ll.printData();