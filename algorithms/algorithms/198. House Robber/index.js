function rob(nums) {
    // [2,7,9,3,1]
    let rob1 = 0; //2 
    let rob2 = 0; //7
    let decision = 0;
    for (let i = 0; i < nums.length; i++) {
        decision = Math.max(nums[i] + rob1, rob2);
        rob1 = rob2;
        rob2 = decision;
    }
    return decision;
};