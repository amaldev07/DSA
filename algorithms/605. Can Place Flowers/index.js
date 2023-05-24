function canPlaceFlowers(flowerbed, n) {
    if (flowerbed.length == 1) {
        return (flowerbed[0] == 0) ? 1 >= n : 0 >= n;
    }
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (i == 0) {
            if (flowerbed[i] == 0 && flowerbed[i + 1] == 0) {
                count = count + 1;
                flowerbed[i] = 1;
            }
        } else if (i == flowerbed.length - 1) {
            if (flowerbed[i] == 0 && flowerbed[i - 1] == 0) {
                count = count + 1;
                flowerbed[i] = 1;
            }
        } else {
            if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
                count = count + 1;
                flowerbed[i] = 1
            }
        }
    }
    return count >= n;
};