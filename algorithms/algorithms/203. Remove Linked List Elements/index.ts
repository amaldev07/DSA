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

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (head == null) {
        return null;
    }
    if (head.val == val) {
        if (head.next) {
            head.val = head.next.val;
            head.next = head.next.next;
            return removeElements(head, val)
        } else {
            return null;
        }
    } else {
        let ll = new ListNode();
        ll.val = head.val;
        ll.next = removeElements(head.next, val);
        return ll;
    }

};