/*
I: Single linked List
O: Reversed linked list
C: ?
Edge case: if ll's size is 0;
Example: Input: 1->2->3->4->5->NULL
         Output: 5->4->3->2->1->NULL
*/


var reverseList = function(head) {
  let prev = null;
  let curr = head;
  let next = null;
  
  while(curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  return prev;
};

// recap

var reverseList = function(head) {
  var prev = null;
  var curr = head;
  var next = null;
  
  while(curr) {
      // Stash the next;
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  
  return prev;
};

// O(n) time 
// O(1) space

// Recap