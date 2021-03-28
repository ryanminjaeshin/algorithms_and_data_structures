/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {


  // cut in half
  // reverse other half
  // and compare

  let slow = head,
      fast = head;

  while(fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
  }

  // 2nd half
  slow = reversed(slow);
  // 1st half
  fast = head;

  while (slow !== null) {
      if(slow.val != fast.val) {
          return false;
      }
      slow = slow.next;
      fast = fast.next;
  }
  return true;

};

const reversed = (head) => {
  let [prev, curr] = [null, head];
  while (curr) {
      [curr.next, prev, curr] = [prev, curr, curr.next]
  }
  return prev;
}