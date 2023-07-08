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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    let leftToRight = true;
    let out = [];
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let tempout = [];
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let el = queue.shift();
            if (leftToRight) {
                tempout.push(el.val);
            } else {
                tempout.unshift(el.val);
            }
            if (el.left) queue.push(el.left);
            if (el.right) queue.push(el.right);
        }
        leftToRight = !leftToRight;
        out.push(tempout);
    }
    return out;
};