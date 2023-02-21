class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function isPalindrome(head) {
    let ret = rec('', head);
    return ret.length == 0 ? true : false;
};
function rec(p, root) {
    if (root == null) {
        return p;
    }
    let val = root.val;
    let newP = p + val;
    let retVal = rec(newP, root.next);
    if (val == retVal.charAt(0)) {
        return retVal.substring(1);
    } else {
        return retVal;
    }
}