function loadScript(scriptName) {
    // Create a new script element
    const script = document.createElement('script');

    // Set the source of the script based on the input parameter
    script.src = scriptName;

    // Optional: Set the type (most browsers handle this automatically)
    script.type = 'text/javascript';

    // Add the script to the document (in this case, to the body)
    document.body.appendChild(script);

    console.log(`${scriptName} loaded successfully`);
}
// loadScript("dfs.js")
// loadScript("adjMatrixToList.js");
// loadScript("200. Number of Islands/index.js");
// loadScript("../Array/228. Summary Ranges/index.js");
// loadScript("733. Flood Fill/dfs.js");
// loadScript("994. Rotting Oranges/index.js");
loadScript("detect-a-cycle-in-undrected-graph/index.js");