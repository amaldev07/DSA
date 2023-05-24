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

/* Using Iterative method
which is more efficient
as the loop execute till the k */
function kthSmallest(root, k) {
    let node = root;
    let stack = [];
    let out = [];
    let count = 0;
    while (true) {
        if (node != null) {
            stack.push(node)
            node = node.left;
        } else {
            if (stack.length <= 0) break;
            node = stack.pop();
            count = count + 1;
            out.push(node.val);
            if (count == k) return node.val;
            node = node.right;
        }
    }
    return count;
};