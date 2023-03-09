function freqAlphabetsjs
(s) {
    debugger;
    let len = s.length - 1;
    let i = len;
    let w = '';
    let out = '';
    while (i >= 0) {
        let ch = s[i]
        if (w.includes('#')) {
            if (w.length == 2) {
                w = ch + w;
                let l = +(w[0] + w[1]);
                let alphabet = String.fromCharCode(96 + (+l))
                out = alphabet + out;
                w = '';
            } else {
                w = s[i] + w;
            }
        } else {
            if (ch == '#') {
                w = ch;
            } else {
                let alphabet = String.fromCharCode(96 + (+ch))
                out = alphabet + out;
            }
        }
        i = i - 1;
    }
    return out;
};
freqAlphabets("10#11#12");