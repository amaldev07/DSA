/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map();
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    let heap = new MyMinHeap();
    for (let [num, count] of map) {
        heap.insert([num, count]);
        if (heap.size() > k) {
            heap.removeMin();
        }
    }
    let result = [];
    for (let [num, count] of heap.heap) {
        result.push(num);
    }
    return result;

};
class MyMinHeap {
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

    insert([no, count]) {
        this.heap.push([no, count]);
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex][1] <= this.heap[index][1]) {
                break;
            }
            let temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[index];
            this.heap[index] = temp;

            index = parentIndex;
        }
    }

    removeMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        while (true) {
            let smallest = index;
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            if (leftIndex < this.heap.length &&
                this.heap[leftIndex][1] < this.heap[smallest][1]
            ) {
                smallest = leftIndex;
            }

            if (
                rightIndex < this.heap.length &&
                this.heap[rightIndex][1] < this.heap[smallest][1]
            ) {
                smallest = rightIndex;
            }

            if (smallest === index) {
                break;
            }

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