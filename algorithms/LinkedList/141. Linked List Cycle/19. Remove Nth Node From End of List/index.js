/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let node = new ListNode();
  node.next =  head;
  if(head.next ==null){
    head = null;
    return head;
  }
  let slow = node;
  let fast = node;
  for(i=0;i<n;i++){
    fast = fast.next;
  }
  while(fast.next){
    fast = fast.next;
    slow = slow.next;
  }
  slow.next  = slow.next.next;
  return node.next;
};