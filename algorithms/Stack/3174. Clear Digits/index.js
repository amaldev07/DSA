/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let chars = [];
    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);
        if (isNaN(s[i])) {
            chars.push(s[i])
        } else {
            chars.pop()
        }
    }
    return chars.join("");
};