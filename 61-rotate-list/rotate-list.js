/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if(!head || !head.next) return head;
    let length = 0;
    let curr = head;
    while (curr) {
        curr = curr.next;
        ++length;
    }

    k = k % length;
    let slow = head;
    let fast = head;

    let i = 0;
    while (i < k) {
        fast = fast.next;
        ++i
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next
    }


    fast.next = head;
    let newHead = slow.next;
    slow.next = null;
    return newHead
}