function containsDuplicateUsingForloop(nums: number[]): boolean {
let sortedNums = nums.sort();
    for(let i=0;i<sortedNums.length-1;i++){
        if(sortedNums[i]==sortedNums[i+1]){
            return true;
        }
    }
    return false;
};

function containsDuplicateUsingWhile(nums: number[]): boolean {
    let sortedNums = nums.sort();
        let flag = false;
        let i=0;
        while(!flag && i<sortedNums.length-1){
           if(sortedNums[i]==sortedNums[i+1]){
               return true;
           } else{
               i=i+1;
           }
        }
        return flag;
    };