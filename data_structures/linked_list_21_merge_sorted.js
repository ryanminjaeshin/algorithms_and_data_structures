// https://leetcode.com/problems/merge-two-sorted-lists/
/**
 *
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.



Example 1:


Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]

 */
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

var mergeTwoLists = function(l1, l2) {
  let temp = new ListNode();
  let currNode = temp;

  while (l1 && l2) {
    if(l1.val < l2.val) {
      currNode.next = l1;
      l1 = l1.next
    } else {
      currNode.next = l2;
      l2 = l2.next;
    }
    currNode = currNode.next;
  }
  // different length;
  currNode.next = l1 || l2;

  return temp.next;
};
// recap