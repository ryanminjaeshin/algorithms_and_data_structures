/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    let pointA = headA,
        pointB = headB;
    while (pointA !== pointB) {
        if (!pointA) {
            pointA = headB
            } else {
            pointA = pointA.next;
        }
        if (!pointB) {
            pointB = headA
            } else {
            pointB = pointB.next;
        }
    }
    return pointA; // or pointB, doesn't matter.
};