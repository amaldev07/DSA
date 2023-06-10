
/*   Definition for a binary tree node. */
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


function minDepth(root: TreeNode | null): number {
    let minDepth = 0;
    if (!root) return 0;
    minDepth = rec(root, 1);
    return minDepth;
};
function rec(node, c) {
    if (node && node.right == null && node.left == null) {
        return c;
    }
    let [lc, rc] = [c, c];
    let l, r;
    if (node.left) {
        lc = lc + 1;
        l = rec(node.left, lc);
    }
    if (node.right) {
        rc = rc + 1;
        r = rec(node.right, rc);
    }

    if (node.left == null) {
        return r
    } else if (node.right == null) {
        return l;
    } else {
        return l < r ? l : r;
    }
}