// Correct method
function arraySubsets1(arr) {
    debugger;
    let outer = [];
    outer.push([]);
    let start = 0;
    let end = 0;
    for (let i = 0; i < arr.length; i++) {
        start = 0;
        if (i > 0 && arr[i] == arr[i - 1]) {
            start = end + 1;
        }
        end = outer.length - 1;
        // let newOuter = JSON.parse(JSON.stringify(outer));
        for (let j = start; j < (end + 1); j++) {
            let newItem = [...outer[j]];
            newItem.push(arr[i]);
            outer.push(newItem);
        }
    }
    return outer;
}

//////////////////////
function arraySubsets(arr) {
    debugger;
    let outer = [];
    outer.push([]);
    let start = 0;
    let end = 0;
    for (let i = 0; i < arr.length; i++) {
        start = 0;
        let newOuter;
        if (i > 0 && arr[i] == arr[i - 1]) {
            start = end + 1;
        }
        end = outer.length - 1;
        newOuter = JSON.parse(JSON.stringify(outer.slice(start, end + 1)));
        // newOuter = JSON.parse(JSON.stringify(outer));
        for (let j = 0; j < newOuter.length; j++) {
            newOuter[j].push(arr[i]);
        }
        // outer.concat(newOuter);
        let a = [...outer, ...newOuter];
        outer = a;
    }
    return outer;
}