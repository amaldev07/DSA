// var ListNode = /** @class */ (function () {
//     function ListNode(val, next) {
//         this.val = (val === undefined ? 0 : val);
//         this.next = (next === undefined ? null : next);
//     }
//     return ListNode;
// }());
// var n4 = new ListNode(4);
// var n3 = new ListNode(3, n4);
// var n2 = new ListNode(2, n3);
// var n1 = new ListNode(1, n2);
// function swapPairs(head) {
//     if (head == null || head.next == null) {
//         return head;
//     }
//     var fistNode = head;
//     var secondNode = head.next;
//     fistNode.next = swapPairs(secondNode.next);
//     secondNode.next = fistNode;
//     return secondNode;
// }
// ;
// // let swappedNodes = swapPairs(n1);
