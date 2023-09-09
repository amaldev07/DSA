function sumSubseqWidths(nums: number[]): number {
    return getSubsets([], nums);
};

function getSubsets(up, p): any {
    if (p.length == 0) {
        if (up.length > 0) {
            return (Math.max(...up) - Math.min(...up));
        } else {
            return 0;
        }
        return;
    }
    let el = p[0];
    let newP = p.slice(1);
    let newUp = [...up, el];
    let l2 = getSubsets(up, newP);
    let l1 = getSubsets(newUp, newP);

    return l1 + l2;
}