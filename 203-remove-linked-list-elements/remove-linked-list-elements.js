/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let sentinalNode = new ListNode();

    let prev = sentinalNode;
    sentinalNode.next = head;
    let curr = head;

    while(curr){
        if(curr.val === val){
            curr=curr.next
        }else{
            prev.next = curr;
            prev = curr;
            curr = curr.next;
        }
    }
    prev.next = null;

    return sentinalNode.next

};