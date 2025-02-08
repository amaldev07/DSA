class NumberContainers {
    private noMap;
    private indexMap;
    constructor() {
        this.noMap = new Map();
        this.indexMap = new Map();
    }

    change(index: number, number: number): void {
        if (this.noMap.has(index)) {
            let existingNo = this.noMap.get(index); //10
            let indexes = this.indexMap.get(existingNo); // 1,2,3,5
            let newIndexes = indexes.filter(x => x != index);
            this.indexMap.set(existingNo, newIndexes);

            this.noMap.set(index, number);

            this.checkAndAddIndexToNoMap(index, number)

        } else {
            this.noMap.set(index, number);
            this.checkAndAddIndexToNoMap(index, number)
        }
    }

    find(number: number): number {
        console.log(this.indexMap)
        if (this.indexMap.has(number) && this.indexMap.get(number).length > 0) {
            let indexes = this.indexMap.get(number);
            return indexes[0];
        } else {
            return -1;
        }
    }

    checkAndAddIndexToNoMap(index, number) {
        if (this.indexMap.has(number) && this.indexMap.get(number).length > 0) {
            let newNoIdexes = this.indexMap.get(number);
            // if (index <= newNoIdexes[0]) {
                // newNoIdexes.unshift(index);  // Insert at the beginning
            // } else {
                newNoIdexes.push(index);  // Insert at the end
            // }
            newNoIdexes.sort((a, b) => a - b);
            this.indexMap.set(number, newNoIdexes);
        } else {
            this.indexMap.set(number, [index]);
        }
    }
    
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */