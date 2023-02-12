document.getElementById("sumButton").addEventListener("click", (event) => {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
        sum = sum + 1;
    }
})
document.getElementById("bgColorButton").addEventListener("click", (event) => {
    if (document.body.style.background !== 'green') {
        document.body.style.background = 'green';
    } else {
        document.body.style.background = 'red';
    }
})