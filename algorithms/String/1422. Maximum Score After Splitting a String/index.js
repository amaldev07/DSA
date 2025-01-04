/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let tc0 = 0;
    let tc1 = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 0) {
            tc0 = tc0 + 1;
        } else {
            tc1 = tc1 + 1;
        }
    }
    let lc0 = 0;
    let rc1 = tc1;
    let score = 0;
    for (let i = 0; i < s.length - 1; i++) {
        let el = s[i];
        if (el == 0) {
            lc0 = lc0 + 1;
        } else {
            rc1 = rc1 - 1;
        }
        score = Math.max(score, (lc0 + rc1));
    }
    return score;
};