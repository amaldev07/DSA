function romanToInt(s: string): number {
    let ms = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]]);
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum = sum + (ms.get(s[i]) || 0);
    }
    return sum;
};