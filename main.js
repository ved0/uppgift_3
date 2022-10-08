
let button = document.getElementById("first");
let counter = 0;
button.onclick = function () {
    let header = document.getElementById("head");
    if (counter % 2 == 0) {
        header.textContent = "Goodbye World";
        counter = 1;
    } else {
        header.textContent = "Hello World";
        counter = 2;
    }
}