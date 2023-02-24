/* https://leetcode.com/problems/intersection-of-two-arrays/description/?orderBy=most_relevant
https://www.youtube.com/watch?v=w5mBjxL1pok */

function intersection(nums1: number[], nums2: number[]): number[] {
    let intersec: number[] = [];
    let num1Set = new Set();
    for (let i = 0; i < nums1.length; i++) {
        num1Set.add(nums1[i]);
    }
    for (let i = 0; i < nums2.length; i++) {
        if (num1Set.has(nums2[i]) && !intersec.includes(nums2[i])) {
            intersec.push(nums2[i]);
        }
    }
    return intersec;
};