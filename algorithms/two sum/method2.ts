//Input: nums = [3,2,4], target = 6
function twoSum(nums: number[], target: number): number[] {
    let output;
    let s_point = 0;
   while(nums.length>=2){
    let x=nums[0];
    let y = target-x;
    nums.shift();
           if(nums.includes(y)){
            let indX = nums.indexOf(s_point); 
            let indY=  nums.includes(y)
            output = [indX,indY]
            break;
        }
    s_point=s_point+1;
   }
   return output;
}