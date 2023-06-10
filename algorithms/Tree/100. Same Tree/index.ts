
/*   Definition for a binary tree node. */
/*   class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  } */


function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    return dfs(p, q);
};
function dfs(p, q) {
    if (p == null && q == null) {
        return true;
    }
    if (p == null || q == null) return false;
    if (p.val != q.val) return false;
    let l = dfs(p.left, q.left);
    let r = dfs(p.right, q.right);
    return l && r;
}

/* Better solution below - Same logic */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    return dfs(p, q);
};
function dfs(p, q) {
    if (p == null || q == null) {
        return (p == q);
    }
    return (p.val == q.val) &&
        dfs(p.left, q.left) &&
        dfs(p.right, q.right);
}