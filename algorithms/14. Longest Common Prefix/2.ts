function longestCommonPrefix(strs) {
    if (strs.find(x => x == "") == "") {
        return "";
    }
    if (strs.length == 1) {
        return strs[0];
    }
    return rec(strs, 0, '', 0); 
    //(inputStringArray, i=0 to length of array, prefix, prefix inxed)
};

function rec(strs, i, pre, pc) {
    if (i == 0) {
        let nextch = strs[i][pc];
        if (nextch == undefined) {
            return pre;
        }
        pre = pre + nextch;
    }
    if (i == strs.length) {
        return rec(strs, 0, pre, pc + 1);
    }
    if (strs[i].startsWith(pre)) {
        return rec(strs, i + 1, pre, pc);
    } else {
        return pre.slice(0, pre.length - 1);
    }
};