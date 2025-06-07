
function permutaionCout(ps, up) {
    if (up == '') {
        return 1;
    }
    let ch = up.charAt(0);
    let count = 0;
    for (let i = 0; i <= ps.length; i++) {
        let nps = ps.slice(0, i) + ch + ps.slice(i, ps.length);
        let c = permutaionCout(nps, up.substring(1));
        count = count + c;
    }
    return count;
}

