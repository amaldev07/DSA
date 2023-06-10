
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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let max = { value: 0 }
    dfs(root, max);
    return max.value;
};
function dfs(root: TreeNode | null, max) {
    if (root == null) {
        return 0;
    }
    let l = dfs(root.left, max);
    let r = dfs(root.right, max);
    if ((l + r) > max.value) max.value = l + r;
    return 1 + Math.max(l, r);
}