function addBinary(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let c = 0;
    let res = '';
    while (i >= 0 || j >= 0) {
        let sum = c + (a[i] ? +a[i] : 0) + (b[j] ? +b[j] : 0);
        res = (sum % 2) + res;
        c = Math.floor(sum / 2);
        i--;
        j--;
    }
    if (c == 1) return c + res;
    return res;
};