// https://leetcode.com/problems/longest-common-prefix/description/
function longestCommonPrefix(strs: string[]): string {
    if (strs.find(x => x == "") == "") {
        return "";
    }
    if (strs.length == 1) {
        return strs[0];
    }
    return rec(strs, 0, '', 0);
};

function rec(strs: string[], i: number, pre: string, pc: number): string {
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