/* 
function binarySearch(ary, searchNo) {
    let low = 0;
    let high = ary.length() - 1;
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
*/

function binarySearch(ary, low, high, searchNo) {
    while (low <= high) {
        let mid = Math.floor(low + ((high - low) / 2));
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


function binarySearch(ary, searchNo) {
    let s = 0;
    let e = ary.length - 1;
    while (s <= e) {
        let m = Math.floor(s + ((e - s) / 2));
        if (searchNo > ary[m]) {
            s = m + 1;
        } else if (searchNo < ary[m]) {
            e = m - 1;
        } else {
            return m;
        }
    }
    return -1;
}


binarySearch([1, 2, 4, 6, 7, 9, 22], 0, 7, 9);

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