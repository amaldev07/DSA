function distributeCandies(candyType) {
    let uniqeTypeCandies = new Set(candyType);
    let uniqeTypeCandiesSize = uniqeTypeCandies.size;
    let halfTheNumber = Math.floor(candyType.length / 2);
    if (uniqeTypeCandiesSize < halfTheNumber) {
        return uniqeTypeCandiesSize;
    } else {
        return halfTheNumber;
    }
};
distributeCandies([1, 1, 2, 2, 3, 3]);