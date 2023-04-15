
/* Definition for a binary tree node. */
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

sumOfLeftLeaves(root);

function sumOfLeftLeaves(root) {
    return dfsSum(root);
};
function dfsSum(root) {
    debugger;
    let l = 0;
    let r = 0;
    if (root.left) {
        if (isLeaf(root?.left)) {
            l = root?.left?.val;
        } else {
            l = dfsSum(root && root?.left);
        }
    }
    if (root.right) {
        if (isLeaf(root?.right)) {
            r = 0;
        } else {
            r = dfsSum(root && root?.right);
        }
    }
    return l + r;
}


function isLeaf(node) {
    if (node && !node.left && !node.right) {
        return true;
    }
    return false;
}