function letterCombinations(digits: string): string[] {
    if (digits == '') { return [] }
    return dPadRet('', digits);
};
function dPadRet(p, up): any {
    if (up == '') {
        return [p];
    }
    let digit = +up.charAt(0);
    let start = (digit - 2) * 3;
    let end = (digit - 1) * 3;
    switch (digit) {
        case 7:
            start = start;
            end = end + 1;
            break;
        case 8:
            start = start + 1;
            end = end + 1;
            break;
        case 9:
            start = start + 1;
            end = end + 2;
            break;
        default:
    }
    let arr = [];
    for (let i = start; i < end; i++) {
        let newCh = String.fromCharCode(+('a'.charCodeAt(0)) + i);
        arr = arr.concat(dPadRet(p + newCh, up.substring(1)));
    }
    return arr;
}