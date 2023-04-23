function romanToIntJs(s)  {
    let ms = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]]);
    let sum = 0; 
    let i = 0;
    debugger;
    while (i <= s.length - 1) {
        let ch = s[i];
        let val = ms.get(s[i]) || 0;
        if (ch == 'I' && i < s.length - 1) {
            let nxtCh = s[i + 1];
            if (nxtCh == 'V' || nxtCh == 'X') {
                val = (ms.get(nxtCh) || 0) - 1;
                i++;
            }
        } else if (ch == 'X' && i < s.length - 1) {
            let nxtCh = s[i + 1];
            if (nxtCh == 'L' || nxtCh == 'C') {
                val = (ms.get(nxtCh) || 0) - 10;
                i++;
            }
        } else if (ch == 'C' && i < s.length - 1) {
            let nxtCh = s[i + 1];
            if (nxtCh == 'D' || nxtCh == 'M') {
                val = (ms.get(nxtCh) || 0) - 100;
                i++;
            }
        }
        sum = sum + val;
        i++;
    }
    return sum;
};
romanToIntJs("MCMXCIV");