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

function binaryTreePaths(root: TreeNode | null): string[] {
    return dfs('', root);
};
function dfs(p, root) {
    if (!root.val) {
        return [];
    }
    if (root.val && !root.left && !root.right) {
        let newP = p ? (p + '->' + root.val) : p + root.val
        return [newP];
    }
    let retAr = [];
    let newP = root.val;
    p = p ? (p + '->' + newP) : p + newP;
    if (root.left) {
        let lft = dfs(p, root.left);
        if (lft?.length > 0) {
            retAr = retAr.concat(lft);
        }
    }
    if (root.right) {
        let rt = dfs(p, root.right);
        if (rt?.length > 0) {
            retAr = retAr.concat(rt);
        }
    }
    return retAr;
}