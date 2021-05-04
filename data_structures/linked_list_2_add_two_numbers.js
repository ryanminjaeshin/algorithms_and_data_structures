/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
     let carry = 0,
         dummy = new ListNode(0);
         curr = dummy;
    while (l1 || l2) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum%10);
        curr = curr.next;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }

    if (carry > 0) curr.next = new ListNode(1);
    return dummy.next
};