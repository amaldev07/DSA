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

function isSubtree(root, subRoot) {
    if (root == null) return false;
    if(isSame(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
function isSame(root, subRoot) {
    if (!root || !subRoot) {
        return (root == subRoot);
    }
    return (root.val == subRoot.val) && isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right);
}