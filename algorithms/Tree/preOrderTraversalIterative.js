function preOrderIterative(root) {
    let s = [root];
    let out = [];
    while (s.length > 0) {
        let lastEl = s.pop(); // see the https://github.com/amaldev07/js_array_functions for array.pop()
        out.push(lastEl.val);
        if (root.right) s.push(root.right);
        if (root.left) s.push(root.left);
    }
    return out;
}