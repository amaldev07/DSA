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
 * @return {number[]}
 */
var boundaryOfBinaryTree = function (root) {
    let ans = [];
    if (!isLeaf(root)) ans.push(root.val);
    addLeftBoundry(root, ans);
    addLeafNodes(root, ans);
    addrightBoundry(root, ans);
    return ans;
};
function isLeaf(node) {
    if (!node.left && !node.right) return true;
    return false;
}
function addLeftBoundry(node, ans) {
    let cur = node.left;
    while (cur) {
        if (!isLeaf(cur)) {
            ans.push(cur.val);
            if (cur.left) cur = cur.left;
            else cur = cur.right;
        } else {
            cur = null;
        }
    }
}
function addLeafNodes(node, ans) {
    if (isLeaf(node)) ans.push(node.val);
    if (node.left) addLeafNodes(node.left, ans);
    if (node.right) addLeafNodes(node.right, ans);
}

function addrightBoundry(node, ans) {
    let rightAns = []
    let cur = node.right;
    while (cur) {
        if (!isLeaf(cur)) {
            rightAns.push(cur.val);
            if (cur.right) cur = cur.right;
            else cur = cur.left;
        } else {
            cur = null;
        }
    }
    for (let i = rightAns.length - 1; i >= 0; i--) {
        ans.push(rightAns[i])
    }
}