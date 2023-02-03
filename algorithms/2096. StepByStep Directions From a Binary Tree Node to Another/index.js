var getDirections = function (root, startValue, destValue) {
    // there is only 1 path from Start to End


    let start = "", end = "";
    // path L - RR 
    function getPath(node, path) {
        if (!node) return;

        if (node.val === startValue)
            start = path;
        if (node.val === destValue)
            end = path;

        getPath(node.left, path + "L");
        getPath(node.right, path + "R");
    }

    getPath(root, "");

    let index = 0;

    while (start[index] === end[index])
        index += 1;

    return start.slice(index).split('').map(_ => "U").join("") + end.slice(index);
};