import { root } from '../Tree_object_level3.js'

function doInorderTraversal() {
    let rootObj = root;
    let opArr = []
    dfs(rootObj, opArr);
    console.log(opArr);
}

function dfs(node, opAr) {
    debugger;
    if (node == null) {
        return;
    }
    dfs(node.left, opAr);
    opArr.push(node.val);
    dfs(node.right, opAr);
}