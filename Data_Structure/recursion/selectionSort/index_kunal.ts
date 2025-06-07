function main(inArr) {
    let arr = inArr || [4, 5, 1, 2, 3];
    let max = 0; // 0th index
    let r = arr.length - 1;
    selectionSortRc(arr, r, 0, max);
    console.log("Sorted array : " + arr)
}
function selectionSortRc(arr, r, c, max) {
    if (r == 0) {
        return;
    }
    if (c < r) {
        if (arr[max] < arr[c + 1]) {
            selectionSortRc(arr, r, c + 1, c + 1)
        } else {
            selectionSortRc(arr, r, c + 1, max);
        }
    } else {
        //swap
        let temp = arr[max];
        arr[max] = arr[c];
        arr[c] = temp;
        selectionSortRc(arr, r - 1, 0, 0)
    }
}
