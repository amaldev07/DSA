function mainss() {
    let arr = [4, 5, 1, 2, 3];
    let last = arr.length - 1;
    let i = 0;
    selectionSortRc(arr, last, i);
    console.log("Sorted array : " + arr)
}
function selectionSortRc(arr, last, i) {
    if (i == arr.length) {
        return;
    }
    let maxIndex = getMaxIndex(arr, 0, last);
    swap(arr, maxIndex, last);
    selectionSortRc(arr, last - 1, i + 1);
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