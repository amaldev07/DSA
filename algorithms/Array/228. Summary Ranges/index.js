/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    debugger;
    let out = [];
    let start = null;
    let end = null;
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i];
        if (start == null) {
            start = el;
        } else {
            let expected = end != null ? end + 1 : start + 1;
            if (el == expected) {
                end = el;
            } else {
                pushToOutArray(start, end, out);
                start = el;
                end = null;
            }
        }
    }
    pushToOutArray(start, end, out);
    return out;
};
function pushToOutArray(start, end, out) {
    if (start == null && end == null) return;
    if (end == null) {
        out.push(start + '');
    } else {
        out.push(start + '->' + end);
    }

}
let nums = [0, 1, 2, 4, 5, 7]
summaryRanges(nums);