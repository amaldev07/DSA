function addBinary(a: string, b: string): string {
    let aAr = a.split('');
    let bAr = b.split('');
    let len = aAr.length > bAr.length ? aAr.length : bAr.length;
    let res = '';
    let c = 0;
    for (let i = 0; i < len; i++) {
        let indOut;
        let x = aAr.pop();
        let y = bAr.pop();
        let sum = (x ? +x : 0) + (y ? +y : 0) + c;
        console.log("sum:" + sum)
        if (sum > 1) {
            c = 1;
            indOut = 0;

        } else if (sum == 1) {
            c = 0;
            indOut = 1;
        } else {
            c = 0;
            indOut = 0;
        }
        res = indOut + res;
    }
    if (c == 1) {
        res = 1 + res;
    }
    return res;
};