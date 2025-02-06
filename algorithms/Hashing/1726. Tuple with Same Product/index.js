/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
    let productMap = new Map();
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let prod = nums[i] * nums[j];
            if (productMap.get(prod) == undefined) productMap.set(prod, 0);
            productMap.set(prod, productMap.get(prod) + 1);
        }
    }
    console.log(productMap);
    let result = 0;
    for (let count of productMap.values()) {
        if (count >= 2) {
            result = result + ((count * (count - 1)) / 2) * 8;
        }
    }
    return result;
};