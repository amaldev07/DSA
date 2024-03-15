/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    s = s.trim();
    if (s == '') return 0;
    let segments = 0;
    let lastCh = '';
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (s[i] == ' ' && lastCh != ' ') {
            segments = segments + 1;
        }
        lastCh = ch;
    }
    return segments + 1;
};