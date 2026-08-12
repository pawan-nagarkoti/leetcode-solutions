/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if(!list1 && !list2) return null

    let sentinel = new ListNode();
    let prev = sentinel;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            prev.next = new ListNode(list1.val);
            prev = prev.next
            list1 = list1.next;
        } else {
            prev.next = new ListNode(list2.val);
            prev = prev.next
            list2 = list2.next;
        }
    }

    if(list1){
        while(list1){
            prev.next = new ListNode(list1.val);
            prev = prev.next;
            list1 = list1.next
        }
    }

    if(list2){
       while(list2){
            prev.next = new ListNode(list2.val);
            prev = prev.next;
            list2 = list2.next
        }
    }

    return sentinel.next;
};