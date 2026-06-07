/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let graph = {};
    for (let [from, to, price] of flights) {
        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push([to, price]);
    }
    let heap = new MyMinHeap();
    heap.insert([src, 0, 1]);

    while (heap.size() > 0) {
        let [node, price, cityCount] = heap.removeMin();
        if (node == dst) {
            return price;
        }
        if (cityCount === k + 2) {
            continue;
        }

        for (let [neighbourNode, neighbourPrice] of graph[node] || []) {
            let newUpdatedPrice = price + neighbourPrice;
            heap.insert([neighbourNode, newUpdatedPrice, cityCount + 1]);
        }

    }
    return -1;
};

class MyMinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap[0];
    }
    insert([node, price, cityCount]) {
        this.heap.push([node, price, cityCount]);
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
            let minIndex = index;
            let leftChildIndex = (index * 2) + 1;
            let rightChildIndex = (index * 2) + 2;
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex][1] < this.heap[minIndex][1]) {
                minIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][1] < this.heap[minIndex][1]) {
                minIndex = rightChildIndex;
            }
            if (minIndex == index) break;

            let temp = this.heap[minIndex];
            this.heap[minIndex] = this.heap[index];
            this.heap[index] = temp;
            index = minIndex;
        }
        return min;
    }
}