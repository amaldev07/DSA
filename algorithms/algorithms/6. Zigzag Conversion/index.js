function convert(s, numRows) {
    if (numRows == 1) return s;
    let res = '';
    for (let row = 0; row < numRows; row++) {
        let i = row;
        let c = (numRows - 1) * 2;
        while (i < s.length) {
            res = res + s[i];
            i = i + c;
            if (row > 0 && row < (numRows - 1) && (i - (2 * row) < s.length)) {
                res = res + s[i - (2 * row)];
            }
        }
    }
    return res;
};