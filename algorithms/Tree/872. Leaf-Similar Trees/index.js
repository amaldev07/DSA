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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let out = [];
    dfs(root1, out, false);
    let res = dfs(root2, out, true);
    if (out.length > 0) return false;
    return res;
};
function dfs(node, out, flag) {
    if (node == null) return true;
    if (node.left == null && node.right == null) {
        if (flag == false) {
            out.push(node.val);
        } else {
            if (out.length <= 0) return false;
            let el = out.shift();
            if (el !== node.val) return false;
            return true;
        }
    }
    let l = dfs(node.left, out, flag);
    if(l==false) return false;
    let r = dfs(node.right, out, flag);
    return l && r;
}

 