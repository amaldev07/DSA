function kthGrammar(n: number, k: number): number {
    let row = rec(n, '');
    return row.charAt(k - 1);
};
function rec(n, p) {
    if (n === 0) {
        return p;
    }
    let newP = p.split('').map(x => x == '0' ? '01' : '10').join('');
    return rec(n - 1, newP);
}