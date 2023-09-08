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

function rightSideView(root: TreeNode | null): number[] {
    let q = [];
    if (root != null) q.push(root);
    let out = [];
    while (q.length > 0) {
        let len = q.length;
        out.push(q[q.length - 1].val);
        for (let i = 0; i < len; i++) {
            let el = q.shift();
            if (el.left) q.push(el.left);
            if (el.right) q.push(el.right);
        }
    }
    return out;
}; 