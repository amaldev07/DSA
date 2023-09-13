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

function widthOfBinaryTree(root: TreeNode | null): number {
    let q = [{ node: root, index: 1 }]; // Array<{node:root, index:1}>
    let maxWidth = 0;
    while (q.length > 0) {
        let qMinIndex = q[0].index;
        let length = q.length;
        let first = 0;
        let last = 0;
        console.log(q)
        for (let i = 0; i < length; i++) {
            let currEl = q.shift();
            let i = currEl.index - qMinIndex;
            if (i == 0) first = currEl.index;
            if (i == length - 1) last = currEl.index;
            if (currEl.node.left) {
                q.push({ node: currEl.node.left, index: ((2 * 1) + 1) });
            }
            if (currEl.node.right) {
                q.push({ node: currEl.node.right, index: ((2 * 1) + 2) });
            }
        }
        maxWidth = Math.max(maxWidth, (last - first + 1))
    }
    return maxWidth;
};