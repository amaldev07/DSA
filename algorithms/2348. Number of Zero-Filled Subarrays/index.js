// [1,3,0,0,2,0,0,4]
function zeroFilledSubarray(nums) {
    debugger;
    let count = 0
    let permuSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            count = count + 1;
        } else {
            permuSum = permuSum + permutation(count);
            count = 0;
        }
    }
    permuSum = permuSum + permutation(count);
    return permuSum;
};
function permutation(n) {
    return (n)*(n + 1) / 2;
}
zeroFilledSubarray([1,3,0,0,0])