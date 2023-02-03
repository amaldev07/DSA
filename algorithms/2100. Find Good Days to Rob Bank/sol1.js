var goodDaysToRobBank = function(security, time) {
    const res = [];
    const len = security.length;
    const left = new Array(len).fill(len);
    const right = new Array(len).fill(len);
    
    for (let i = 1; i < len; i++) {
        left[i] = security[i] <= security[i - 1] ? left[i - 1] + 1 : 0;
    }
    console.log(left.join(','))
    for (let i = len - 2; i >= 0; i--) {
        right[i] = security[i] <= security[i + 1] ? right[i + 1] + 1 : 0;
    }
    console.log(right.join(','))
    for (let i = time; i < len - time; i++) {
        if (left[i] >= time && right[i] >= time) res.push(i);
    }
    
    return res;
};