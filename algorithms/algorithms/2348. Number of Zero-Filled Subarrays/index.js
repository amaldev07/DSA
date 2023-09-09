function zeroFilledSubarray(nums) {
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
    return (n) * (n + 1) / 2;
}