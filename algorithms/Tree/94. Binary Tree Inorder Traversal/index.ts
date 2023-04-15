
/* Definition for a binary tree node. */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function inorderTraversal1(root: TreeNode | null): number[] {
    let iArr = [];
    dfs1(root, iArr);
    return iArr
};
function dfs1(root: TreeNode | null, arr: number[]) {
    if (root == null) {
        return;
    }
    dfs1(root.left, arr);
    arr.push(root.val);
    dfs1(root.right, arr);
}