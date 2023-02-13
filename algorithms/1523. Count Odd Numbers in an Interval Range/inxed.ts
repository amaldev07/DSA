// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
function countOdds(low: number, high: number): number {
    if (low % 2 == 0) {
        low = low + 1;
    }
    if (high % 2 == 0) {
        high = high - 1;
    }
    return (((high - low) + 2) / 2);
};