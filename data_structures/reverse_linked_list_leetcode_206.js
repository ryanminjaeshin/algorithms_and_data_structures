/*
I: Single linked List
O: Reversed linked list
C: ?
Edge case: if ll's size is 0;
Example: Input: 1->2->3->4->5->NULL
         Output: 5->4->3->2->1->NULL
*/


var reverseLinkedList = function(linkedlist) {
  var node = linkedlist;
  var previous = null;

  while(node) {
    // save next or you lose it!!!
    var save = node.next;
    // reverse pointer
    node.next = previous;
    // increment previous to current node
    previous = node;
    // increment node to next node or null at end of list
    node = save;
  }
  return previous;   // Change the list head !!!
}
