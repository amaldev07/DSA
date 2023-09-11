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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let out = [];
    dfs(root, p, q, '', out);
    console.log(out)
    let x = out[0];
    let y = out[1];
    let common;
    let i = 0;
    let j = 0;
    while (i < x.length && j < y.length) {
        if (+x[i] == +y[j]) {
            common = +x[i]
        }
        i++;
        j++;
    }
    return new TreeNode(common);
};
function dfs(node, p, q, path, out) {
    if (node == null) return;
    if (node == p || node == q) {
        path = path + ((path.length > 0) ? ',' : '') + node.val;
        out.push(path.split(','));
    }
    path = path + ((path.length > 0) ? ',' : '') + node.val;
    dfs(node.left, p, q, path, out);
    dfs(node.right, p, q, path, out);
}