class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] > this.heap[index]) {
                let temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[index];
                this.heap[index] = temp;
            } else {
                break;
            }
            index = parentIndex;
        }
    }
    showHeap() {
        return this.heap;
    }
}
// [1,3,2,8,5]
let heap = new MinHeap();
heap.insert(1);
heap.insert(3);
heap.insert(2);
heap.insert(8);
heap.insert(5);
heap.showHeap();
heap.insert(0);
heap.showHeap();