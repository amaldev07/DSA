//Input: nums = [3,2,4], target = 6
function twoSum(nums: number[], target: number): number[] {
   
    //debugger;
         let output;
    for(let i=0;i<nums.length;i++){
    let x = nums[i];
        let y = target - x;
         
        if(nums.slice(i+1,nums.length).includes(y)){
            let indX = nums.indexOf(x); 
            let indY=  nums.slice(i+1,nums.length).indexOf(y)+i+1;
            output = [indX,indY]
            break;
        }
    }
         return output;
    };