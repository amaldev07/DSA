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

function findSecondMinimumValue(root) {
    return dfs(root).m2;
};
function dfs(node) {
    if (node == null) {
        return { m1: -1, m2: -1 };
    }
    let l = dfs(node.left);
    let r = dfs(node.right);
    let m1m2 = getM1M2([l.m1, l.m2, r.m1, r.m2, node.val]);
    return { m1: m1m2.m1, m2: m1m2.m2 }
}
function getM1M2(vals) {
    let sVals = vals.sort();
    return { sVals[0], sVals[1]};
}