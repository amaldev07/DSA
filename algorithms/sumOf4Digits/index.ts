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
        out.push(up);
        return;
    } else if (getSum(up) >= 10 || up.length > 5) {
        return;
    }
    let upSum = getSum(up);
    let end = 10 - upSum;
    for (let i = 1; i <= end; i++) {
        // if ((upSum + i) <= 10 && (up + i).length < 6) {
        recu(up + i, out)
        // }
    }
}