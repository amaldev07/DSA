/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    /* Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
       Output: 2 
    */
    let graph = {};
    for (let i = 1; i <= n; i++) {
        graph[i] = [];
    }
    for (let [src, target, time] of times) {
        graph[src].push([target, time]);
    }

    let heap = new MyMinHeap();
    let distance = Array(n + 1).fill(Infinity);
    heap.insert([k, 0]);
    distance[k] = 0;
    while (heap.size() > 0) {
        let [node, dist] = heap.removeMin();
        if (dist > distance[node]) {
            continue;
        }
        for (let [dNode, dDist] of graph[node]) {
            let newDistance = (dist + dDist)
            if (distance[dNode] > newDistance) {
                heap.insert([dNode, newDistance]);
                distance[dNode] = newDistance;
            }
        }
    }
    let maxTime = -1;
    for (let i = 1; i <= n; i++) {
        if (distance[i] == Infinity) return -1;
        maxTime = Math.max(distance[i], maxTime);
    }

    return maxTime;
};

class MyMinHeap {
    constructor() {
        this.heap = [];//[node, time]
    }

    size() {
        return this.heap.length;
    }

    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    insert([node, time]) {
        this.heap.push([node, time]);
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