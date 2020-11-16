/*-----------------------------------*/

//         TIME COMPLEXITY

//                 AVERAGE  | WORST
//  ACCESS:          Θ(n)   |  Θ(n)
//  SEARCH:          Θ(n)   |  Θ(n)
//  INSERTION:       Θ(1)   |  Θ(1)
//  DELETION:        Θ(1)   |  Θ(1)

/*-----------------------------------*/
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
    insertAt(data, index) {
        // if index is out of range
        if(index > 0 && index > this.size) {
            return;
        }

        // if first index
        if (index === 0) {
            this.insertFirst(data);
            return;
            /**
             * this.head =new Node(data, this.head);
             * return;
             */
        }

        // create a node to insert
        const node = new Node(data);
        // set current and previous variable
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // Node before index
            count ++;
            current = current.next; // Node after index
        }

        // Attach current to node.next
        node.next = current;
        // Attach node to previous.next
        previous.next = node;

        //        [previois][previous.next] -> [node]-[node.next] -> [current]-[current.next]
        // INDEX               1                         2                      3

        this.size ++;
    }

    // Get at index
    getAt (index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                console.log(current.data);
            }
            count ++;
            current = current.next;
        }

        // if ll is empty, return null;
        return null;
    }


    // Remove at index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous
        let count = 0;

        // Remove first
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count ++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size --;
    }

    // Print data
    printData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Clear list
    clearList () {
        this.head = null;
        this.size = 0;
        return;
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 2)
ll.removeAt(0);
ll.clearList();
ll.printData();
