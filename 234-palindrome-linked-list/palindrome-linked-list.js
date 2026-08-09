/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let length = 0;
    let mainHead = head;
    let curr = head
    while (curr) {
        curr = curr.next
        ++length
    }
    console.log('l', length)

    let half = Math.floor(length / 2);
    let curr1 = head;
    let i = 0;
    while (i < half) {
        curr1 = curr1.next;
        ++i
    }

    let prev = null
    while (curr1) {
        let temp = curr1.next;
        curr1.next = prev;
        prev = curr1;
        curr1 = temp
    }
    head = prev

    let check = false;
    while (mainHead && head) {
        if (mainHead.val === head.val) {
            mainHead = mainHead.next;
            head = head.next
            check = true;
        }else{
             check=false
             break;
        }
    }
    return check;
};