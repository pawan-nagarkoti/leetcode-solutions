/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let l = 0;
    let curr = head;
    while (curr) {
        curr = curr.next;
        ++l
    }

    let index = l - n;
    if(index===0){
        return head.next
    }

    let j = 0;
    let curr1 = head;
    while (j < index - 1) {
        curr1 = curr1.next;
        ++j
    }
    curr1.next = curr1.next.next;
    return head;
};


var removeNthFromEnd = function (head, n) {
    let sentinal = new ListNode();
    sentinal.next = head;
    let l=0;
    let curr = head;
    while(curr){
        ++l;
        curr=curr.next
    }
    let prevVal = l-n;

    let prev = sentinal;
    j=0
    while(j<prevVal){
        prev= prev.next
        ++j
    }
    prev.next = prev.next.next;
    return sentinal.next
}