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
    return makeTree(head);
};
function makeTree(head) {
    if(head == null) return null
    let mid = getMid(head);
    let root = new TreeNode(mid.val);
    root.left = makeTree(head);
    root.right = makeTree(mid.next);
    return root;
}
function getMid(head) {
    let slow = head;
    let prev = head;
    let fast = head;
    while (fast == null || fast.next == null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    return slow;
}