function numRollsToTarget(n, k, target) {
    debugger;
    let count = recFaces('', target, k, n, 0);
    return count;
};


function recFaces(p, up, faces, n, count) {
    debugger;
    //p here is string
    if (up == 0) {
        return count+1;
    }
    // if (p.length >= n) {
    //     return [];
    // }
    let ret = [];
    for (let i = 0; i < (up + 1) && i < faces; i++) {
        let newP = p + (i + 1)
        if ((up - (i + 1)) == 0 && newP.length <= n) {
            count = count + (recFaces(newP, up - (i + 1), faces, n,0));
        } else if (newP.length < n) {
            count = count + (recFaces(newP, up - (i + 1), faces, n,0));
        }
    }
    return count;
}
