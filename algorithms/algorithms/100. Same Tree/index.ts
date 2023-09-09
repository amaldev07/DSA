
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


function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    return trec(p, q);
};
function trec(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p?.left && !q?.left && !p?.right && !q?.right) {
        return true;
    }
    if ((p?.left == q?.left) && (p?.right == q?.right)) {
        let l = trec(p?.left, q?.left);
        let r = trec(p?.right, q?.right);
        return l && r;
    } else {
        return false;
    }
}
