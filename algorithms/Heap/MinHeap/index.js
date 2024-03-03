function MinHeap() {
    heap = [];
    function getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    function getLeftChildIndex(i) {
        return ((i * 2) + 1);
    }
    function getRightChildIndex(i) {
        return ((i * 2) + 2);
    }

    function insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }
    function heapifyUp() {

    }

}

