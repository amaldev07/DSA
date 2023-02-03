class MyNode {
    value: number;
    next: MyNode | any;
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// this is a sample of Linked List
class MyLinkedList {
    head: MyNode | any;
    size: number;
    constructor() {
        this.head = null;
        this.size = 0;
    }
    printNode() {
        // debugger;
    }
    getNode(index: number): MyNode | any {
        if (index >= this.size) {
            return null;
        }
        let count = 0;
        let node = this.head;
        while (count < index) {
            node = node.next;
            count = count + 1;
        }
        return node;
    }
    addValueToTail(value) {
        if (this.size == 0) {
            this.head = { value: value, next: null };
            this.size++
            return;
        }
        const lastnode = this.getNode(this.size - 1);
        lastnode.next = { value: value, next: null };
        this.size++
    }
}