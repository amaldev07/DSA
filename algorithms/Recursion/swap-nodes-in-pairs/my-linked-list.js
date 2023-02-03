var MyNode = /** @class */ (function () {
    function MyNode(value) {
        this.value = value;
        this.next = null;
    }
    return MyNode;
}());
var MyLinkedList = /** @class */ (function () {
    function MyLinkedList() {
        this.head = null;
        this.size = 0;
    }
    MyLinkedList.prototype.printNode = function () {
        debugger;
        console.log(JSON.stringify(this.head));
    };
    MyLinkedList.prototype.getNode = function (index) {
        if (index == 0 || index >= this.size) {
            return null;
        }
        var count = 0;
        var node = this.head;
        while (count < index) {
            node = node.next;
            count = count + 1;
        }
        return node;
    };
    MyLinkedList.prototype.addValueToTail = function (value) {
        if (this.size == 0) {
            this.head = { value: value, next: null };
            this.size++;
            return;
        }
        var lastnode = this.getNode(this.size - 1);
        lastnode.next = { value: value, next: null };
        this.size++;
    };
    return MyLinkedList;
}());
