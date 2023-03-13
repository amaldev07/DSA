/* use formula (n*(n+1)) /2
n = last no  
1,2,3,4,5,6,7,8,9,10
n=10;
 */

function missingNumber(nums: number[]): number {
    let n = nums.length;
    let forularSum = (n * (n + 1)) / 2;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return forularSum - sum;
};