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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    let mid = middleNode(head);
    let rev = reverseList(mid.next);


};
function middleNode(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;
    while (slow?.next && fast?.next?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return (fast?.next == null) ? slow : slow?.next;
}
function reverseList(head: ListNode | null): ListNode | null {
    let current = head;
    let prev = null;
    while(current!=null){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current= temp;
    }
    return prev;
};