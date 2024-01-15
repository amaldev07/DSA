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

function sumRootToLeaf(root) {
    let out = [];
    dfs(root, out, '');
    let sum = 0;
    for (let i = 0; i < out.length; i++) {
        sum = sum + parseInt(out[i], 2);
    }
    return sum;
};
function dfs(node, out, binaryNo) {
    if (!node.left && !node.right) {
        binaryNo = binaryNo + node.val;
        out.push(binaryNo)
    }
    binaryNo = binaryNo + node.val;
    if (node.left) {
        dfs(node.left, out, binaryNo);
    }
    if (node.right) {
        dfs(node.right, out, binaryNo);
    }
}