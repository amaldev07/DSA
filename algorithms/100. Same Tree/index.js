/* 
function isSameTree(p, q) {
    return trec(p, q);
};
function trec(p, q) {
    if (p?.left == null && q?.left == null && !p?.right == null && !q?.right == null) {
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

trec(result.root, result.root)
 */