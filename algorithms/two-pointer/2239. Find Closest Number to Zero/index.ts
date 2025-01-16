function findClosestNumber(nums: number[]): number {
    let closestSumToZero = Number.MAX_VALUE;
    for(let i=0;i<nums.length;i++){
        if(Math.abs(nums[i])<Math.abs(closestSumToZero)) {
            closestSumToZero = nums[i];
        } else if(Math.abs(nums[i])==Math.abs(closestSumToZero)){
            if((nums[i])>(closestSumToZero)){
                closestSumToZero = nums[i];
            } 
        }
    }
    return closestSumToZero;
};