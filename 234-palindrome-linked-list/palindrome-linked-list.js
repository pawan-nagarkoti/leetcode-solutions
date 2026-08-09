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
// var isPalindrome = function (head) {

//     let length = 0;
//     let mainHead = head;
//     let curr = head
//     while (curr) {
//         curr = curr.next
//         ++length
//     }


//     let half = Math.floor(length / 2);
//     let curr1 = head;
//     let i = 0;
//     while (i < half) {
//         curr1 = curr1.next;
//         ++i
//     }

//     let prev = null
//     while (curr1) {
//         let temp = curr1.next;
//         curr1.next = prev;
//         prev = curr1;
//         curr1 = temp
//     }
//     head = prev

//     let check = false;
//     while (mainHead && head) {
//         if (mainHead.val === head.val) {
//             mainHead = mainHead.next;
//             head = head.next
//             check = true;
//         }else{
//              check=false
//              break;
//         }
//     }
//     return check;
// };


var isPalindrome = function (head) {
    // find mid node
    let slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse
    let prev = null;
    let curr = slow;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // check is it pailendrome
    let mainHead = head;
    head = prev;

    let check = false;
    while (mainHead && head) {
        console.log('hii')
        if (mainHead.val === head.val) {
            check = true;
            mainHead = mainHead.next;
            head = head.next;
        } else {
            check = false;
            break;
        }
    }
    return check;
}