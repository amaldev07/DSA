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

/* function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let hm = new Map();
  while (headA) {
    hm.set(headA, 1);
    headA = headA.next;
  }
  while (headB) {
    if (hm.get(headB)) {
      return headB;
    }
    headB = headB.next;
  }
}; */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let p1 = headA;
    let p2 = headB;
    while (p1 != p2) {
        if (p1 == null) {
            p1 = headB
        } else {
            p1 = p1.next;
        }
        if (p2 == null) {
            p2 = headA
        } else {
            p2 = p2.next;
        }
    }
    return p1;
};