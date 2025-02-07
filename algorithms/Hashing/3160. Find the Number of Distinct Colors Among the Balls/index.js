/**
* @param {number} limit
* @param {number[][]} queries
* @return {number[]}
*/
var queryResults = function (limit, queries) {
    let map = new Map();         // Stores the mapping of ball -> color
    let colorCOunt = new Map();  // Stores the count of each color used across balls
    let set = new Set();         // Tracks distinct colors currently in use
    let res = [];                // Stores the result after each query

    for (let i = 0; i < queries.length; i++) {
        let [ball, color] = queries[i];

        // If the ball already has a color assigned
        if (map.has(ball)) {
            let previousColor = map.get(ball);

            // previousColor occurence is only 1 delete it from set else keep it in set
            if (colorCOunt.get(previousColor) <= 1) {
                set.delete(previousColor);
            }

            // Reduce count of previousColor
            colorCOunt.set(previousColor, colorCOunt.get(previousColor) - 1);
        }

        // Increase count for the new color (or initialize it)
        colorCOunt.set(color, (colorCOunt.get(color) || 0) + 1);

        // Assign the new color to the ball
        map.set(ball, color);

        // Ensure new color is present in the distinct set
        set.add(color);

        // Store the current number of distinct colors
        res.push(set.size);
    }

    return res;
};

/* below is the initial not refacteored code */
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

