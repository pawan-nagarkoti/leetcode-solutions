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
var middleNode = function(head) {
    if(!head) return;

    let curr = head;
    let l=0;
    while(curr !== null){
        curr= curr.next;
        ++l
    }

    let i=0;
    let ln = Math.floor(l/2)
    while(i<ln){
        head = head.next
        ++i
    }
    return head
};


var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast&&fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
}