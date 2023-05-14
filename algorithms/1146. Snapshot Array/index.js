class SnapshotArray {
    ar;
    snaps;
    constructor(length) {
        this.ar = new Array(length).fill(0)
        this.snaps = [];
    }
    set(index, val) {
        this.ar.splice(index, 0, val);
    }

    snap() {
        this.snaps.push([...this.ar]);
        return this.snaps.length - 1;
    }

    get(index, snap_id) {
        // return binarySearch(this.snaps(snap_id), index);
        if(snap_id>=this.snaps.length) return 0;
        return this.snaps[snap_id][index];
    }
    // binarySearch(ary, searchNo) {
    //     let s = 0;
    //     let e = ary.length - 1;
    //     while (s <= e) {
    //         let m = Math.floor(s + ((e - s) / 2));
    //         if (searchNo > ary[m]) {
    //             s = m + 1;
    //         } else if (searchNo < ary[m]) {
    //             e = m - 1;
    //         } else {
    //             return m;
    //         }
    //     }
    //     return -1;
    // }

}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */