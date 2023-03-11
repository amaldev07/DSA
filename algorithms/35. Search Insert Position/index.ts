/* use binary search hear 
if no found return  no
else instead of -1 
return arr[s];
b/z at this point s>e
 */
function searchInsert(nums: number[], target: number): number {
    let s = 0;
    let e = nums.length - 1;
    while (s <= e) {
        let mid = Math.floor(s + ((e - s) / 2));
        if (target < nums[mid]) {
            e = mid - 1
        } else if (target > nums[mid]) {
            s = mid + 1;
        } else {
            return mid;
        }
    }
    return s;
};