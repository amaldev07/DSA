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

function evaluateTree(root) {
    let map = {
        0: false,
        1: true
    }
    return dfs(root, map);
};
function dfs(node, map) {
    if (!node.left && !node.right) {
        return map[node.val];
    }
    let l;
    let r;
    l = dfs(node.left, map);
    r = dfs(node.right, map);
    if (node.val == 2) {
        return (l || r);
    }
    if (node.val == 3) {
        return (l && r);
    }
}