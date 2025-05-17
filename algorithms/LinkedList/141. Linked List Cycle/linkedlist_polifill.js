function LLNode(value) {
    this.value = value;
    this.next = null;
}
function LInkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.insertLast = (val) => {
        let newNode = new LLNode(val)
        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = this.tail = newNode;
        }
        this.size++;
    }
    this.insertFirst = (val) => {
        let newNode = new LLNode(val)
        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = this.tail = newNode;
        }
        this.size++;
    }
    this.display = () => {
        let vals = [];
        let temp = this.head;
        while (temp) {
            vals.push(temp.value);
            temp = temp.next;
        }
        console.log(vals.join("->"));
    }
    this.deleteFirst = () => {
        if (this.head) {
            this.head = this.head.next;
            this.size--;
        }
        if (this.head == null) {
            this.tail = null;
        }
    }
    this.deleteLast = () => {
        let temp = this.head;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            let node = this.get(this.size - 1);
            node.next = null;
            this.tail = node;
        }
        this.size = this.size - 1;
    }
    this.get = (n) => {
        let temp = this.head;
        for (let i = 1; i < n; i++) {
            temp = temp.next;
        }
        return temp;
    }
    this.deleteAtIndex = (n) => {
        if (n === 0) {
            this.deleteFirst();
            return;
        }

        if (n === this.size - 1) {
            this.deleteLast();
            return;
        }

        if (n < 0 || n > this.size) {
            return false;
        }
        let node = this.get(n - 1);
        node.next = node.next.next;
        this.size--;
    }
}

let myLL = new LInkedList();
myLL.insertLast(1);
myLL.insertLast(2);
myLL.insertLast(3);
myLL.insertFirst(7);
myLL.insertFirst(8);
myLL.display();
// myLL.deleteFirst()
// myLL.display();
// myLL.deleteLast();
// myLL.display();
myLL.deleteAtIndex(3);
myLL.display();
