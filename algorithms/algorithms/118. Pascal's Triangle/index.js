function generate(numRows) {
    debugger;
    let res = [];
    for (let i = 1; i <= numRows; i++) {
        let temp = [];
        if (i == 1) {
            temp = [1];
        } else if (i == 2) {
            temp = [1, 1];
        } else {
            temp = [1];
            let ar = res[res.length - 1];
            for (let k = 0; k < ar.length; k++) {
                temp.push(ar[k] + ar[k + 1]);
            }
            temp.push(1);
        }
        res.push(temp);
    }
    return res;
};
generate(3);