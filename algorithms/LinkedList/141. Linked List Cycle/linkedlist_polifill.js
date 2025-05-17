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
    this.display = () => {
        let vals = [];
        let temp = this.head;
        while (temp) {
            vals.push(temp.value);
            temp = temp.next;
        }
        console.log(vals.join("->"));
    }
}

let myLL = new LInkedList();
myLL.insertLast(1);
myLL.insertLast(2);
myLL.insertLast(3);
myLL.display();