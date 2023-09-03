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
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// function sortedListToBST(head: ListNode | null): TreeNode | null {
function sortedListToBST(head) {
    return makeBsTree(head);
};
function makeBsTree(head) {
    if (head == null) return null;
    let mid = getMid(head);
    let root = new TreeNode(mid.val, null, null);
    if (head == mid) return root; // otherwise this will end up in a infinite loop to stop at 1,2,3 => on next step 
    // it will be 1 onplay, so to stop at this point
    root.left = makeBsTree(head);
    root.right = makeBsTree(mid.next);
    return root;
}
function getMid(head) {
    let slow = head;
    let prev = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if (prev != null) prev.next = null;
    return slow;
}