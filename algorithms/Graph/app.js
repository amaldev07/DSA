function loadScript(scriptName) {
    // Create a new script element
    const script = document.createElement('script');

    // Set the source of the script based on the input parameter
    script.src = scriptName;

    // Optional: Set the type (most browsers handle this automatically)
    script.type = 'text/javascript';

    // Add the script to the document (in this case, to the body)
    document.body.appendChild(script);c

    console.log(`${scriptName} loaded successfully`);
}
loadScript("dfs")