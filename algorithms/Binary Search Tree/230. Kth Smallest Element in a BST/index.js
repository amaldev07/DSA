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

function kthSmallest(root, k) {
    /* Find any dfs, 
    get the nodes values to array
    sort the array, to find the k th element */
    if (root == null) return [];
    let s = [root];
    let out = [];
    while (s.length > 0) {
        let lastEl = s.pop(); // see the https://github.com/amaldev07/js_array_functions for array.pop()
        out.push(lastEl.val);
        if (lastEl.right) s.push(lastEl.right);
        if (lastEl.left) s.push(lastEl.left);
    }
    return out.sort((a, b) => a - b)[k - 1];
};