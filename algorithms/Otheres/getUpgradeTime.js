function getUpgradeTime(server_id, start_id, end_id) {
    const rankMap = new Map();
    for (let i = 0; i < server_id.length; i++) {
        rankMap.set(server_id[i], i);
    }

    const result = [];

    for (let i = 0; i < start_id.length; i++) {
        const startIndex = start_id[i];
        const endIndex = end_id[i];

        let iTime = 0;
        for (let j = startIndex; j <= endIndex; j++) {
            if (j === startIndex) {
                iTime = iTime + 1
            } else if (rankMap.get(j - 1) < rankMap.get(j)) {
                iTime = iTime + 1
            } else {
                iTime = iTime + 2;
            }
        }
        result.push(iTime);

    }
    return result;
}

/* const server_id = [1,3,4,2,5];
const start_id = [1,2,4];
const end_id = [5,4,5];

console.log(getUpgradeTime(server_id, start_id, end_id)); 
//6,4,2 */

const server_id = [5, 3, 2, 6, 1, 4];
const start_id = [4, 2, 1];
const end_id = [6, 3, 3];

console.log(getUpgradeTime(server_id, start_id, end_id)); 
