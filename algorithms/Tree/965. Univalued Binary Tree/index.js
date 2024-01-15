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

function isUnivalTree(root) {

    let qArr = [];
    qArr.push(root);
    let val = root.val;
    // let opArr = [];
    while (qArr.length > 0) {
        let firstElement = qArr.shift();
        // opArr.push(firstElement.val);
        if (firstElement.left) {
            if (firstElement.left.val != val) return false;
            qArr.push(firstElement.left);
        }
        if (firstElement.right) {
            if (firstElement.right.val != val) return false;
            qArr.push(firstElement.right);
        }
    }
    return true;
};