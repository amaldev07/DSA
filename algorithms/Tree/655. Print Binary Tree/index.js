/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {
    let height = getHeight(root);
    let r = height;
    let c = Math.pow(2, height) - 1;
    let res = Array.from({ length: r }, () => Array(c).fill(""));
    fill(root, 0, 0, c - 1, res);
    return res;
};
function fill(node, row, left, right, res) {
    if (!node) return;
    let mid = Math.floor((left + right) / 2);
    res[row][mid] = node.val + "";
    fill(node.left, row + 1, left, mid - 1, res);
    fill(node.right, row + 1, mid + 1, right, res);
}
function getHeight(node) {
    if (!node) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}
