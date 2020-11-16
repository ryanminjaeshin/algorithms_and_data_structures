/*
I: Single linked List
O: Reversed linked list
C: ?
Edge case: if ll's size is 0;
Example: Input: 1->2->3->4->5->NULL
         Output: 5->4->3->2->1->NULL
*/

// Plan
// Create empty ll
// attach node to the ll in reverse order.

var reverseList = function(head) {

};

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
}