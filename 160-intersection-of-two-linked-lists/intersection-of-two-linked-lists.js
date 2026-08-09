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
// var getIntersectionNode = function(headA, headB) {
//     let store = new Set();
//     while(headA){
//         store.add(headA);
//         headA= headA.next;
//     }

//     while(headB){
//         if(!store.has(headB)){
//             headB = headB.next
//         }else{
//             return headB
//         }
//     }

//     return null

// };


var getIntersectionNode = function (headA, headB) {
    let p1 = headA;
    let p2 = headB;
    let check1 = false;
    let check2 = false;


    while (p1 !== null || p2 !== null) {
        if (p1 == p2) {
            return p1 || p2
        }
        if (check1 && p1 === null || check2 && p2 === null) {
            return null;
        }
        

        if (p1 === null) {
            p1 = headB
            check1 = true;
        } else {
            p1 = p1.next;
        }


        if (p2 === null) {
            p2 = headA
            check2 = true;

        } else {
            p2 = p2.next;
        }

    }
}


















