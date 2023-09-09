function dPad(p, up) {
    if (up == '') {
        console.log(p);
        return;
    }
    let digit = +up.charAt(0);
    let start = (digit - 1) * 3;
    let end = (digit) * 3;
    for (let i = start; i < end; i++) {
        let newCh = String.fromCharCode(+('a'.charCodeAt(0)) + i);
        dPad(p + newCh, up.substring(1))
    }
}