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

function findTarget(root: TreeNode | null, k: number): boolean {
    let elms = new Map();
    dfs(root, elms);
    console.log(elms)
    return twoSum(elms, k);
};
function twoSum(e, k) {
    for (let [key, value] of e.entries()) {
        let x = +key;
        let y = k - x;
        if (x != y) {
            if (e.get(y)) return true;
        } else {
            if (e.get(y) > 1) return true;
        }
    }
    return false;
}
function dfs(node, elms) {
    if (node == null) return;
    elms.set(node.val, (elms.get(node.val) || 0) + 1);
    dfs(node.left, elms);
    dfs(node.right, elms);
}