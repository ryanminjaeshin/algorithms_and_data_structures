/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 const reorderList = (head) => {

  if (!head || !head.next) return null;

  // split in half;
  // reverse the second half
  // merge first half and reversed second half

  // Split in half
  let slow = head,
      fast = head,
      l1 = head,
      prev = null;
  while (fast && fast.next) {
      prev = slow;
      fast = fast.next.next;
      slow = slow.next;
  }
  prev.next = null;

  let l2 = reversed(slow);

   merge(l1, l2)
};

const reversed = (head) => {
  let [prev, curr] = [null, head];
  while (curr) {
      [curr.next, prev, curr] = [prev, curr, curr.next]
  }
  return prev;
}

const merge = (l1, l2) => {
  while (l1) {
      let l1_next = l1.next;
      let l2_next = l2.next;
      l1.next = l2;
      if(!l1_next) break;
      l2.next = l1_next;

      l1 = l1_next;
      l2 = l2_next;
  }
}