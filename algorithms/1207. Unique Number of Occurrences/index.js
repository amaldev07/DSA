function uniqueOccurrences(arr: number[]): boolean {
    let ms = new Map();
    for (let i = 0; i < arr.length; i++) {
        ms.set(arr[i], 1 + (ms.get(arr[i]) || 0))
    }
    let vals = [];
    for (let [key, value] of ms) {
        if (vals.includes(value)) {
            return false;
        }
        vals.push(value);
    }
    return true;
};