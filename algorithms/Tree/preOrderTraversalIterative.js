function preOrderIterative(root) {
    if (root == null) return [];
    let s = [root];
    let out = [];
    while (s.length > 0) {
        let lastEl = s.pop(); // see the https://github.com/amaldev07/js_array_functions for array.pop()
        out.push(lastEl.val);
        if (lastEl.right) s.push(lastEl.right);
        if (lastEl.left) s.push(lastEl.left);
    }
    return out;
}