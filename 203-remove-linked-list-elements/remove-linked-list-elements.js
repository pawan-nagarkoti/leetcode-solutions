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
    sentinalNode.next = head;
    let prev = sentinalNode;
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


var removeElements = function(head, val) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let prev = sentinel;

    while(prev && prev.next){
        if(prev.next.val === val){
            prev.next = prev.next.next
        }else{
            prev = prev.next;
        }
    }

    return sentinel.next
}