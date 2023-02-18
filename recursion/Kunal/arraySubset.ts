function arraySubsets1(arr) {
    debugger;
    let outer = [];
    outer.push([]);
    for (let i = 0; i < arr.length; i++) {
        // let newOuter = JSON.parse(JSON.stringify(outer));
        for (let j = 0; j < outer.length; j++) {
            let newItem = [...outer[j]];
            newItem.push(arr[i]);
            outer.push(newItem);
        }
    }
    return outer;
}
///////////////////////////////
function arraySubsets(arr) {
    debugger;
    let outer = [];
    outer.push([]);
    for (let i = 0; i < arr.length; i++) {
        let newOuter = JSON.parse(JSON.stringify(outer));
        for (let j = 0; j < outer.length; j++) {
            newOuter[j].push(arr[i]);
        }
        // outer.concat(newOuter);
        let a = [...outer, ...newOuter];
        outer = a;
    }
    return outer;
}