
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


function invertTree(root: TreeNode | null): TreeNode | null {
    return rec(root);
};
function rec(root: TreeNode | null): TreeNode | null {
    if (!root?.left && !root?.right) {
        return root;
    }
    rec(root.left);
    rec(root.right);
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    return root;
}