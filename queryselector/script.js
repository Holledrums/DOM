const color = prompt("welcome farbe?");

//get body element / Element im HTML finden
const body = document.querySelector("body");

// style ändern
body.style.backgroundColor = color;

console.log(body);
