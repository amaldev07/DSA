/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let heap =  new MyMaxHeap();
    for(let stone of stones){
        heap.insert(stone);
    }  
    while(heap.size()>1){
        let a = heap.removeMax();
        let b = heap.removeMax();
        if(a>=b){
            heap.insert(a-b);
        }
    }
    return heap.peek();
};

class MyMaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    insert(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex] >= this.heap[index]) {
                break;
            }
            let temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[index];
            this.heap[index] = temp;

            index = parentIndex;
        }
    }

    removeMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        while (true) {
            let maxIndex = index;
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            if (leftIndex < this.heap.length &&
                this.heap[leftIndex] > this.heap[maxIndex]
            ) {
                maxIndex = leftIndex;
            }

            if (
                rightIndex < this.heap.length &&
                this.heap[rightIndex] > this.heap[maxIndex]
            ) {
                maxIndex = rightIndex;
            }

            if (maxIndex === index) {
                break;
            }

            let temp = this.heap[index];
            this.heap[index] = this.heap[maxIndex];
            this.heap[maxIndex] = temp;

            index = maxIndex;
        }
        return max;
    }
    showHeap() {
        return this.heap;
    }
}
