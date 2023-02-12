const worker = new Worker("worker.js");
document.getElementById("sumButton").addEventListener("click", (event) => {
    worker.postMessage('amal');
})
worker.onmessage = function(msg){
    console.log(msg);
    alert("Sum is " + msg.data);
}
document.getElementById("bgColorButton").addEventListener("click", (event) => {
    if (document.body.style.background !== 'green') {
        document.body.style.background = 'green';
    } else {
        document.body.style.background = 'red';
    }
})