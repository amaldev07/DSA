// Swap Nodes in Pairs
// https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1681/
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

function swapPairs(head: ListNode | null) {
    if (head == null || head.next == null) {
        return head
    }
    let fistNode = head;
    let secondNode = head.next;

    fistNode.next = swapPairs(secondNode.next);
    secondNode.next = fistNode;

    return secondNode;
};