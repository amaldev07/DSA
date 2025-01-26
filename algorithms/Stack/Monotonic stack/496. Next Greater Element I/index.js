/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let stack = []; //Monotonic stack
    let numMap = new Map();
    for (let i = nums2.length - 1; i >= 0; i--) {
        let el = nums2[i];
        while (stack.length > 0 && el > stack[stack.length - 1]) {
            stack.pop();
        }
        if (stack.length == 0) {
            numMap.set(el, -1);
        } else {
            numMap.set(el, stack[stack.length - 1]);
        }
        stack.push(el);
    }
    return nums1.map(x => numMap.get(x)); // map returns a new array
};