//  Definition for singly - linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    //base condition
    if (head == null || head.next == null) {
        return head;
    }
    let reverseNode = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reverseNode;
};

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