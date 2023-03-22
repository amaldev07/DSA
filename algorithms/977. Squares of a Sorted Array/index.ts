/* Youtube
https://www.youtube.com/watch?v=fikdT0AI5z4 */
function sortedSquares(nums: number[]): number[] {
    let l = 0;
    let r = nums.length - 1;
    let srt: number[] = [];
    while (r >= l) {
        if (Math.abs(nums[r]) > Math.abs(nums[l])) {
            srt.unshift(Math.pow(nums[r], 2));
            r = r - 1;
        } else {
            srt.unshift(Math.pow(nums[l], 2));
            l = l + 1;
        }
    }
    return srt;
};