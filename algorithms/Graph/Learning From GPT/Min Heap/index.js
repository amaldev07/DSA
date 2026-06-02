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
    removeMin() {
        if (this.heap.length == 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        while (true) {
            let smallest = index;
            let leftIndex = (index * 2) + 1;
            let rightIndex = (index * 2) + 2;
            if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallest]) {
                smallest = leftIndex;
            }

            if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallest]) {
                smallest = rightIndex;
            }

            if (smallest == index) {
                break;
            }
            //swap
            let temp = this.heap[index];
            this.heap[index] = this.heap[smallest];
            this.heap[smallest] = temp;

            index = smallest;
        }
        return min;
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