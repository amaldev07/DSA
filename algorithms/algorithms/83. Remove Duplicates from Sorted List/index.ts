
/* Definition for singly-linked list. */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function deleteDuplicates(head: ListNode | null): ListNode | null {
    doRec(head);
    return head;
};
function doRec(head: ListNode | null) {
    if (!head || !(head?.next)) {
        return;
    }
    if (head.val == head.next?.val) {
        head.next = head.next.next;
        return doRec(head);
    } else {
        return doRec(head.next);
    }

}