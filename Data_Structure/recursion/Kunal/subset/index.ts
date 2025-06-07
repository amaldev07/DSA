// Find all the subsets of string 'abc'
function main() {
    let sset = [];
    findSubSet('', 'abc', sset);
}

// p - unProcessed
// up - Processed
function findSubSet(p, up, sbset) {
    if (up == '') {
        sbset.push(p);
        return;
    }
    let ch = up.charAt(0);
    up = up.slice(1);
    findSubSet(p + ch, up, sbset)
    findSubSet(p, up, sbset)
}