/*
var queryResults = function (limit, queries) {
   let map = new Map();
   let colorCOunt = new Map();
   let set = new Set();
   let res = [];
   for (let i = 0; i < queries.length; i++) {
       let [ball, color] = queries[i];
       if (map.get(ball) == undefined) {
           map.set(ball, color);
           set.add(color);
           colorCOunt.set(color, (colorCOunt.get(color) || 0) + 1);
       } else {
           let previousColor = map.get(ball);
           if (colorCOunt.get(previousColor) != undefined &&
               colorCOunt.get(previousColor) <= 1) {
               set.delete(previousColor);
           }
           colorCOunt.set(previousColor, colorCOunt.get(previousColor) - 1);
           colorCOunt.set(color, (colorCOunt.get(color) || 0) + 1);
           
           map.set(ball, color);
           set.add(color);
       }
       res.push(set.size);
   }
   return res;
}; */

/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
    let map = new Map();
    let colorCOunt = new Map();
    let set = new Set();
    let res = [];
    for (let i = 0; i < queries.length; i++) {
        let [ball, color] = queries[i];
        if (map.has(ball)) {
            let previousColor = map.get(ball);
            if (colorCOunt.get(previousColor) <= 1) {
                set.delete(previousColor);
            }
            colorCOunt.set(previousColor, colorCOunt.get(previousColor) - 1);
        }
        colorCOunt.set(color, (colorCOunt.get(color) || 0) + 1);
        map.set(ball, color);
        set.add(color);
        res.push(set.size);
    }
    return res;
};