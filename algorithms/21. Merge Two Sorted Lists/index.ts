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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 == null) {
        return list2;
    }
    if (list2 == null) {
        return list1;
    }
    let fv = list1.val;
    let sv = list2.val;
    if (fv < sv) {
        let tll = new ListNode();
        tll.val = fv;
        tll.next = mergeTwoLists(list1.next, list2);
        return tll;
    } else {
        let tll = new ListNode();
        tll.val = sv;
        tll.next = mergeTwoLists(list1, list2.next);
        return tll;
    }

};