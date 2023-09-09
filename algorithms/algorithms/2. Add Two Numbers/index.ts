// https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// c -> carry
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
function aaa() {
    let l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
    let l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
    let ll = addTwoNumbers(l1, l2);
}
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let outputLL = addLlNos(l1, l2, 0);
    return outputLL;
};

function addLlNos(l1: ListNode | null, l2: ListNode | null, c: number): ListNode | null {
    if (l1 == null && l2 == null) {
        if (c != 0) {
            let ll = new ListNode();
            ll.val = c;
            ll.next = null;
            return ll;
        } else {
            return null;
        }
    }
    let fn = l1 ? l1.val : 0;
    let sn = l2 ? l2.val : 0;
    let sum = fn + sn + c;
    let llSum = sum % 10;
    let carry = Math.floor(sum / 10);
    let ll = new ListNode();
    ll.val = llSum;
    ll.next = addLlNos((l1 && l1.next) ? l1.next : null, (l2 && l2.next) ? l2.next : null, carry);
    return ll;
} 