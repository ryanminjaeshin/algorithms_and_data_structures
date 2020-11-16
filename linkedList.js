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
        this.size ++;
    }

    // Insert last node
    insertLast(data) {
        // create new node to insert at last
        let node = new Node(data);
        let current;

        // if empty, put the node to the head
        if (!this.head) {
            this.head = node;
        } else {
            // loop through the linkedList until the next is null
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            // Insert the node to the last node
            current.next = node;
        }

        this.size ++
    }
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
ll.insertLast(400);
ll.printData();