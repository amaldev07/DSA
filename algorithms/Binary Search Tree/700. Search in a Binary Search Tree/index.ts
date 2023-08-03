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

function searchBST1(root: TreeNode | null, val: number): TreeNode | null {
    if (root == null) return root;
    if (root.val == val) return root;
    if (val > root.val) {
        return searchBST1(root.right, val);
    } else {
        return searchBST1(root.left, val);
    }
};