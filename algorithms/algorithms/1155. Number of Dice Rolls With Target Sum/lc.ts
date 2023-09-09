function numRollsToTarget(n: number, k: number, target: number): number {
    return recFaces('', target, k, n).length;
};


function recFaces(p, up, faces, n): any {
    //p here is string
    if (up == 0) {
        return [p];
    }
    // if (p.length >= n) {
    //     return [];
    // }
    let ret = [];
    for (let i = 0; i < (up + 1) && i < faces; i++) {
        let newP = p + (i + 1)
        if ((up - (i + 1)) == 0 && newP.length <= 2) {
            ret = ret.concat(recFaces(newP, up - (i + 1), faces, n));
        } else if (newP.length < 2) {
            ret = ret.concat(recFaces(newP, up - (i + 1), faces, n));
        }
    }
    return ret;
}
