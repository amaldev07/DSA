// abc - > abc bac bca acb cab cab
function permutaions(ps, up) {
    if (up == '') {
        console.log(ps);
        return;
    }
    let ch = up.charAt(0);
    for (let i = 0; i <= ps.length; i++) {
        let nps = ps.slice(0, i) + ch + ps.slice(i, ps.length);
        permutaions(nps, up.substring(1));
    }
}

function permutaions(ps, up) {
    debugger;
    if (up == '') {
        return [ps];
    }
    let psVals = [];
    let ch = up.charAt(0);
    for (let i = 0; i <= ps.length; i++) {
        let nps = ps.slice(0, i) + ch + ps.slice(i, ps.length);
        let retPs = permutaions(nps, up.substring(1));
        psVals = psVals.concat(retPs)
    }
    return psVals;
}

