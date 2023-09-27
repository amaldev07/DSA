function generate(numRows: number): number[][] {
    let res = [];
    for (let i = 1; i <= numRows; i++) {
        let temp = [];
        if (i == 1) {
            temp = [1];
        } else if (i == 2) {
            temp = [1, 1];
        } else {
            temp = [1];
            let j = 1;
            while (j < i) {
                let ar = res[res.length - 1];
                for (let k = 0; i < ar.length; k++) {
                    temp.push(ar[k] + ar[k - 1]);
                }
            }
            temp.push(1);
        }
        res.push(temp);
    }
    return res;
};