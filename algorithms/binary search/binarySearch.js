function binarySearch(ary, low, high, searchNo) {
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (searchNo > ary[mid]) {
            low = mid + 1;
        } else if (searchNo < ary[mid]) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

binarySearch([1,2,4,6,7,9,22], 0, 7, 9);

/* function binarySearch(ary, low, high, searchNo) {
    let flag = 0;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (searchNo > ary[mid]) {
            low = mid + 1;
        } else if (searchNo < ary[mid]) {
            high = mid - 1;
        } else {
            console.log('Searched number found at ' + mid + 'position');
            flag = 1;
            return;
        }
    }
    if (flag == 0) {
        console.log('Searched number not found');
    }
} */