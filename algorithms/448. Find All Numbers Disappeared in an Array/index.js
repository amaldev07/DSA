function findDisappearedNumbers(nums) {
    debugger;
    let appeared = new Array(nums.length + 1).fill(0);
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        appeared[nums[i]] = appeared[nums[i]] + 1;
    }
    for (let i = 1; i < appeared.length; i++) {
        if (appeared[i] == 0) {
            output.push(i)
        }
    }
    return output;
}
findDisappearedNumbers([4,3,2,7,8,2,3,1]);
