function dPadRet(p, up): any {
    if (up == '') {
        return [p];
    }
    let digit = +up.charAt(0);
    let start = (digit - 1) * 3;
    let end = (digit) * 3;
    let arr = [];
    for (let i = start; i < end; i++) {
        let newCh = String.fromCharCode(+('a'.charCodeAt(0)) + i);
        arr = arr.concat(dPadRet(p + newCh, up.substring(1)));
    }
    return arr;
}