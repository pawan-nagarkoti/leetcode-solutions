/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (!head) return head;

    let slow = head;
    let fast = head.next;
    let fastStart = head.next;

    while ((slow && slow.next) && (fast && fast.next)) {
        slow.next = slow.next.next;
        slow = slow.next;
        
        fast.next = fast.next.next
        fast = fast.next
    }

    slow.next = fastStart;
    return head
};