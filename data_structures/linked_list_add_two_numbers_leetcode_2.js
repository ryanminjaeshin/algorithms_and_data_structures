// https://leetcode.com/problems/add-two-numbers/

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

 /*

    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    

    Example 1:


    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

 */


var addTwoNumbers = function(l1, l2) {
    var p1 = l1;
    var p2 = l2;
    var carry = 0;
    var solution = new ListNode(0);
    var result = solution;
    
    while (p1 !== null || p2 !== null) {
        var x = (p1 !== null) ? p1.val : 0;
        var y = (p2 !== null) ? p2.val : 0;
        
        var sum = x + y + carry;
        
        carry = Math.floor(sum / 10);

        result.next = new ListNode(sum % 10);
        
        result = result.next;
        
        if (p1 !== null) p1 = p1.next;
        if (p2 !== null) p2 = p2.next;
    }
    
    if (carry > 0) result.next = new ListNode(1);
    
    return solution.next;
};