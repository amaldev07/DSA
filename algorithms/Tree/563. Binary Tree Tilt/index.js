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

function findTilt(root) {
    if (!root) return 0;
    return dfs(root).ns;
};
function dfs(node) {
    /* s-> sum
    ns-> node sum
     */
    if (node.left == null && node.right == null) {
        let val = node.val;
        node.val = 0;
        return { s: val, ns: 0 };
    }
    let l = (node.left) ? dfs(node.left) : { s: 0, ns: 0 };
    let r = (node.right) ? dfs(node.right) : { s: 0, ns: 0 };
    let sum = l.s + r.s + node.val;
    node.val = Math.abs(l.s - r.s);
    return { s: sum, ns: node.val + l.ns + r.ns };
}
