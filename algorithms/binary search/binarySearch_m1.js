function binarySearch(ary, low, high, searchNo) {
    let flag = 0;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (ary[mid] == searchNo) {
            console.log('Searched number found at ' + mid + 'position');
            flag = 1;
            return;
        } else if (searchNo < ary[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    if (flag == 0) {
        console.log('Searched number not found');
    }
}