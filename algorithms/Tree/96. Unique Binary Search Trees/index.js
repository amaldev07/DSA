function numTrees(n: number): number {
    let hm = new Map();
    hm.set(0, 1);
    hm.set(1, 1);
    for (let i = 2; i <= n; i++) {
        let total = 0;
        let j = 0;
        while (j < i) {
            console.log("hm.get(j) -" +j+"->"+ hm.get(j))
            console.log("hm.get(i-j) -" +(i-j-1)+"->"+hm.get(i - j -1))
            console.log("---------------")
            total = total + hm.get(j) * hm.get(i - j-1 );
            j=j+1;
        }
        hm.set(i, total);
    }
    return hm.get(n)
};