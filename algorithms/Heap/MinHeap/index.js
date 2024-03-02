class MinHeap {
    constructor() {
        this.heap = [];
    }
}

getParentIndex(i){
    return Math.floor((i - 1) / 2);
}
getLeftChildIndex(i){
    return (i * 2) + 1;
}
getLeftChildIndex(i){
    return (i * 2) + 2;
}
