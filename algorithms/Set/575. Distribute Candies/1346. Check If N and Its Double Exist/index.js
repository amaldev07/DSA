/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (set.has(el * 2) || (el % 2 === 0 && set.has(el / 2))) {
            return true;
        } else {
            set.add(el);
        }
    }
    return false;
};