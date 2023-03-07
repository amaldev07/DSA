class ListNode { 
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function middleNode(head: ListNode | null): ListNode | null {
    let count = rec(head, 0);
    let ret: ListNode | null = head;
    let half = (Math.floor(count / 2)) + 1;
    let i=1;
    while (i < half) {
        ret = ret.next;
        i = i+1;
    }
    return ret;
};
function rec(head: ListNode | null, count): number {
    if (head == null) {
        return count;
    }
    count = count + 1;
    return rec(head.next, count);
}