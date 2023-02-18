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
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }

function minDiffInBST(root: TreeNode | null): number {
    let mDiff = root.val;
    let rLeft = root.val;
    let rRight = root.val;

    if (root && root?.left) {
        rLeft = Math.abs(root.val - root?.left.val);
    }
    if (root && root?.right) {
        rRight = Math.abs(root?.val - root?.right?.val);
    }
    mDiff = Math.min(rLeft, rRight);
    let minDiff = minDiffInTreeNode(root, mDiff);
    return minDiff;
};
function minDiffInTreeNode(root: TreeNode | null, mDiff: number): number {
    if (root?.left == null && root?.right == null) {
        return mDiff;
    }
    let ld = mDiff;
    let rd = mDiff;
    if (root && root?.left) {
        ld = Math.abs(root.val - root?.left.val);
    }
    if (root && root?.right) {
        rd = Math.abs(root?.val - root?.right?.val);
    }
    mDiff = Math.min(Math.abs(ld), Math.abs(rd));

    if (root && root?.left) {
        ld = minDiffInTreeNode(root.left, mDiff);
    }
    if (root && root?.right) {
        rd = minDiffInTreeNode(root.right, mDiff);

    }
    mDiff = Math.min(Math.abs(ld), Math.abs(rd));
    return mDiff;
}