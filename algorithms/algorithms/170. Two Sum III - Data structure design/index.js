class TwoSum {
    map;
    vals;
    constructor() {
        this.map = new Map();
        this.vals = [];
    }

    add(number: number): void {
        this.map.set(number, (this.map.get(number) || 0) + 1);
        this.vals.push(number);
    }

    find(value: number): boolean {
        for (let i = 0; i < this.vals.length; i++) {
            let no1 = this.vals[i];
            let no2 = value - no1;
            if ((no1 == no2) && (this.map.get(no1) > 1)) return true;
            if ((no1 != no2) && (this.map.get(no2) >= 1)) return true;
        }
        return false;
    }
}

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */