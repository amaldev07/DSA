function characterReplacement(s: string, k: number): number {
    let etterMap = new Map();
    let maxCountLetter = s[0];
    for (let i = 0; i < s.length; i++) {
        etterMap.set(s[i], (etterMap.get(s[i]) || 0) + 1)
        if (etterMap.get(s[i]) > etterMap.get(maxCountLetter)) {
            maxCountLetter = s[i];
        }
    }
    let l: number[] = [];
    // let firstReplaceIndex = 0;
    let count = 0;
    for (let r = 0; r < s.length; r++) {
        let ch = s[r];
        if (ch! == maxCountLetter) {
            if (k > 0) {
                l.push(r);
                k = k - 1
                count = count + 1;
            } else {
                let l1 = l.shift() || 0;
                count = r - l1 + 1;
            }
        } else {
            count = count + 1;
        }
    }
    return count;
};