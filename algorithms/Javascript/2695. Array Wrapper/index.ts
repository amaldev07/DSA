class ArrayWrapper {
    nums: number[];
    constructor(nums: number[]) {
        this.nums = nums;
    }

    valueOf() {
        return this.nums.reduce((n, a) => n + a, 0);
    }

    toString() {
        return '[' + this.nums.join(',') + ']'
    }
};
