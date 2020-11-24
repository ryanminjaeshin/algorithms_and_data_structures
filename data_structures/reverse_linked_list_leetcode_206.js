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
  let next = null;
  
  while(head !== null) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
  }
  return prev;
};