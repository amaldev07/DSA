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


function isBalanced(root: TreeNode | null): boolean {
    if (dfs(root) == -1) {
        return false;
    } else {
        return true;
    }
};
function dfs(root: TreeNode | null) {
    if (root == null) {
        return 0;
    }
    let l = dfs(root.left);
    if (l == -1) return -1;
    let r = dfs(root.right);
    if (r == -1) return -1;
    if (Math.abs(l - r) > 1) return -1;
    return 1 + Math.max(l, r);
}