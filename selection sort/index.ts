function main() {
    let arr = [4, 5, 1, 2, 3];
    selectionSort(arr);
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lastIndex = arr.length - 1 - i;
        let maxIndex = getMaxIndex(arr, 0, lastIndex);
        swap(arr, maxIndex, lastIndex);
    }
    console.log("Sorted array", arr);
}

function getMaxIndex(arr, first, lastIndex) {
    let max = first;
    for (let i = 0; i <= lastIndex; i++) {
        if (arr[max] < arr[i]) {
            max = i;
        }
    }
    return max;
}
function swap(arr, maxIndex, lastIndex) {
    let temp = arr[maxIndex];
    arr[maxIndex] = arr[lastIndex];
    arr[lastIndex] = temp;
}