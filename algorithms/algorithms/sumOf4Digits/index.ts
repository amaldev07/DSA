function sum() {
    let out = [];
    recu('0', out);
    return out;
}
function getSum(s) {
    /* to get the sum of a string 
    eg : '1234' => 10 */
    return s.split('').map(x => +x).reduce((partialSum, a) => partialSum + a, 0);
}
function recu(up, out) {
    debugger;
    if (getSum(up) == 10 && up.length == 5) {
        out.push(up.substring(1));
        /* up.substring(1) is for '01117' => '1117'
        to remove the first 0 */
        return;
    } else if (getSum(up) >= 10 || up.length > 5) {
        return;
    }
    let upSum = getSum(up);
    let end = 10 - upSum;
    for (let i = 1; i <= end; i++) {
        recu(up + i, out)
    }
}