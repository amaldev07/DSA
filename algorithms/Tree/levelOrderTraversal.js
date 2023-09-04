function levelOrderTraversal(root) {
    /**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    let out = [] // [[1],[2,3],[4,5,6,7]]
    let queue = [];
    if(root==null) return root;
    queue.push(root);
    while (queue.length > 0) {
        let tempout = [];
        let len = queue.length;
        for (let i = 0; i <len ; i++) {
            let el = queue.shift();
            tempout.push(el);
            if (el.left) queue.push(el.left);
            if (el.right) queue.push(el.right);
        }
        out.push(tempout);
    }
    console.log(out)
    for (let i = 0; i < out.length; i++) {
            let el = out[i];
            for(let j = 0;j<el.length;j++){
                el[j].next =(el[j+1]) ? el[j+1]:null;
            }
        }
        return root;
};

}