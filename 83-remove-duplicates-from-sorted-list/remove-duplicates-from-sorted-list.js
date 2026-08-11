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
var deleteDuplicates = function (head) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let curr = head;
    let prev = sentinel;

    while (curr && curr.next) {
        if (curr.val !== curr.next.val) {
            prev.next = curr;
            prev = curr;
            curr = curr.next
        } else {
            curr = curr.next;
        }
    }

    prev.next = curr
    return sentinel.next
};


var deleteDuplicates = function (head) {
    let curr = head;
    while(curr && curr.next){
        if(curr.val === curr.next.val){
            curr.next = curr.next.next
        }else{
            curr = curr.next
        }
    }

    return head
}