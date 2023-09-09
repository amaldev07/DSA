function minWindow(s: string, t: string): string {
    if (t == '') return '';
    let l = 0;
    let haveMap = new Map();
    let needMap = new Map();
    for (let i = 0; i < t.length; i++) {
        needMap.set(t[i], 1 + (needMap.get(t[i]) || 0))
    }
    let [needCount, haveCount] = [needMap.size, 0];
    let [minLength, maxStr] = [s.length + 1, [-1, -1]]
    for (let r = 0; r < s.length; r++) {
        let ch = s[r];
        if (needMap.has(ch)) {
            haveMap.set(ch, 1 + (haveMap.get(ch) || 0));
            if (haveMap.get(ch) == needMap.get(ch)) {
                haveCount = haveCount + 1;
            }
        }
        while (needCount === haveCount) {
            let currLen = r - l + 1;
            if (currLen < minLength) {
                maxStr = [l, r];
                minLength = currLen;
            }
            if (haveMap.get(s[l])) {
                haveMap.set(s[l], (haveMap.get(s[l]) - 1));
                if (haveMap.get(s[l]) < needMap.get(s[l])) {
                    haveCount = haveCount - 1;
                }
            }
            l = l + 1;
        }
    }
    return s.substring(maxStr[0], maxStr[1] + 1);
};