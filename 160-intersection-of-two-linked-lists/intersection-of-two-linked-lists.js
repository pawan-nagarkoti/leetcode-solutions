/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let store = new Set();
    while(headA){
        store.add(headA);
        headA= headA.next;
    }

    while(headB){
        if(!store.has(headB)){
            headB = headB.next
        }else{
            return headB
        }
    }

    return null

};