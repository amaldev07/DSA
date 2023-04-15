

/*   Definition for a binary tree node. */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function postorderTraversal(root: TreeNode | null): number[] {
    let iArr = [];
    dfsPo(root, iArr);
    return iArr
};
function dfsPo(root: TreeNode | null, arr: number[]) {
    if (root == null) {
        return;
    }
    dfsPo(root.left, arr);
    dfsPo(root.right, arr);
    arr.push(root.val);
}