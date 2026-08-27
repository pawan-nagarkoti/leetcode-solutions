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

var addTwoNumbers = function (l1, l2) {
    let sentinel = new ListNode();
    let prev = sentinel;
    let carry = 0;

    while (l1 || l2) {
        l1Val = l1 ? l1.val : 0;
        l2Val = l2 ? l2.val : 0;

        let sum = l1Val + l2Val + carry;
        carry = Math.floor(sum / 10);
        newVal = sum % 10;

        prev.next = new ListNode(newVal);
        prev = prev.next

        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }

    if (carry) {
        prev.next = new ListNode(carry);
        prev = prev.next
    }

    return sentinel.next;
};


var addTwoNumbers = function (l1, l2) {
    let sentinal = new ListNode()
    let prev = sentinal
    let carry = 0
    while (l1 || l2 || carry) {
        let a = l1 ? l1.val : 0;
        let b = l2 ? l2.val : 0;

        let ans = a + b + carry;
        carry = Math.floor(ans / 10);
        let digit = ans % 10;

        prev.next = new ListNode(digit)
        prev = prev.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next

    }

    return sentinal.next

}