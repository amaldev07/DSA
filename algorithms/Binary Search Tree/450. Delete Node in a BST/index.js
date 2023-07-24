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

function deleteNode(root, key) {
    if (root == null) return null;
    if (root.val == key) {
        return helper(root);
    }
    let dummy = root;
    while (root != null) {
        if (key < root.val) {
            if (root.left != null && root.left.val == key) {
                root.left = helper(root.left);
            } else {
                root = root.left;
            }
        } else {
            if (root.right != null && root.right.val == key) {
                root.right = helper(root.right);
            } else {
                root = root.right;
            }
        }
    }
    return dummy;
};
function helper(node) {
    if (node.left == null) {
        return node.right;
    } else if (node.right == null) {
        return node.left;
    }
    let rightTemp = node.right;
    let rightNode = getRightNode(node.left);
    rightNode.right = rightTemp;
    return node.left
}
function getRightNode(node) {
    if (node.right == null) {
        return node;
    }
    return getRightNode(node.right);
}