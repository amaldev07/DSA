function anagramMappings(nums1: number[], nums2: number[]): number[] {
    let hm = new Map();
    for (let i = 0; i < nums2.length; i++) {
        hm.set(nums2[i], i);
    }
    let out = [];
    for (let i = 0; i < nums1.length; i++) {
        out.push(hm.get(nums1[i]));
    }
    return out;
};