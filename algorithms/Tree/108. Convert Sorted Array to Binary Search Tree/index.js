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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return maketree(nums, 0, nums.length - 1);
};
function maketree(nums, s, e) {
    if (e > s) return null;
    m = Math.floor(s + (e - s) / 2);
    let root = new TreeNode(nums[m]);
    root.left = maketree(nums, s, m - 1);
    root.right = maketree(nums, m + 1, e);
    return root;
}