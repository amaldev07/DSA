/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
var solution = function (isBadVersion: any) {
    return function (n: number): number {
        let s = 1;
        let e = n
        while (s < e) {
            let m = Math.floor((s + e) / 2);
            if (isBadVersion(m)) {
                e = m;
            } else if (isBadVersion(m) == false) {
                s = m + 1;
            }
        }
        return s;
    };
};  