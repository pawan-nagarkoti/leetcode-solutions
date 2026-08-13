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
var swapPairs = function (head) {
    if (!head || !head.next) return head;

    let sentinel = new ListNode();
    let prev = sentinel;
    let curr = head;

    while (curr && curr.next) {
        let temp = curr.next.next;
        prev.next = curr.next;
        prev = prev.next;
        prev.next = curr;
        prev = curr
        curr.next = temp
        curr = temp;
    }

    return sentinel.next
};


//  using recursive approach

var swapPairs = function (head) {
    if (!head || !head.next) return head;

    let l = head
    let r = head.next;
    l.next = swapPairs(r.next)
    r.next = l
    return r
}