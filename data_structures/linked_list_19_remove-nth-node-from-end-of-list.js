var removeNthFromEnd = function(head, n) {
  let temp = new ListNode(0);
  temp.next = head;
  let  slow = temp,
      fast = temp;

  while(fast.next !== null) {
      fast = fast.next
      if(n-- <= 0) {
          slow = slow.next;
      }
  }
  slow.next = slow.next.next;
  return temp.next;
};