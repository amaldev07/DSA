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

function isValidBST(root) {
    return isBST(root, Number.MIN_VALUE, Number.MAX_VALUE);
};
function isBST(node, min, max) {
    if (node == null) return true;
    if (node.val > min && node.val < max) {
        let l = isBST(node.left, min, node.val);
        let r = isBST(node.right, node.val, max);
        return l && r;
    } else {
        return false;
    }
}