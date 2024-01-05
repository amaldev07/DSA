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

/*
Floyd's tortoise and hare algorithm
https://www.youtube.com/watch?v=KXZp5S9pz_A
 */

/* TypeScript - Floyd tortoise and hare algorithm - Linked List */
function hasCycle(head) {
    let slow = head;
    let fast = head;
    while (slow != null && fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
};