class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
let n4 = new ListNode(4);
let n3 = new ListNode(3, n4);
let n2 = new ListNode(2, n3);
let n1 = new ListNode(1, n2);

function swapPairs(head: ListNode | null) {
    if (head == null || head.next == null) {
        return head
    }
    let fistNode = head;
    let secondNode = head.next;

    fistNode.next = swapPairs(secondNode.next);
    secondNode.next = fistNode;

    return secondNode;
};