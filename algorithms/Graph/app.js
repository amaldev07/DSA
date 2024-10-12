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
loadScript("dfs")

// Example condition to decide which script to load
/* const condition = 'script1'; // This can be changed based on your logic

if (condition === 'script1') {
    loadScript('script1.js');
} else if (condition === 'script2') {
    loadScript('script2.js');
} else {
    loadScript('script.js'); // Default script
} */