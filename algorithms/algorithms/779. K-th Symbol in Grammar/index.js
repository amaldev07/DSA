function kthGrammar(n, k) {
    let row = rec(n, '');
    return row.charAt(k - 1);
};
function rec(n, p) {
    debugger;
    if (n === 0) {
        return p;
    }
    let newP = p.split('').map(x => x == '0' ? '01' : '10').join('');
    return rec(n - 1, p == '' ? '0' : newP);
}