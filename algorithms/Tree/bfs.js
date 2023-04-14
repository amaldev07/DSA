/* for 3 layer
output is
1
2, 3
4, 5  6, 7

0ut put => 1, 2, 3, 4, 5, 6, 7 */

function bfs(root) {
    let qArr = [];
    qArr.push(root);
    let opArr = [];
    while (qArr.length > 0) {
        let firstElement = qArr.shift();
        opArr.push(firstElement.val);
        if (firstElement.left) {
            qArr.push(firstElement.left);
        }
        if (firstElement.right) {
            qArr.push(firstElement.right);
        }
    }
    console.log(opArr);
}