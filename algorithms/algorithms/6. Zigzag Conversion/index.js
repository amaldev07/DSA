function convert(s: string, numRows: number): string {
    let res = '';
    for (let r = 0; r < numRows; r++) {
        let i = r;
        let c = (numRows - 1) * 2;
        if (r == 0 || r == numRows - 1){
            c=c-2*r;
        }
        while(i<s.length){
            res= res+s[i];
            i =i+c;
        }
    }
    return res;
};