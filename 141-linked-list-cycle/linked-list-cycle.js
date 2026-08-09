/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let check = new Set();
    while(head != null){
        if(check.has(head)){
            return true;
        }else{
            check.add(head);
            head = head.next
        }
    }
    return false;
};