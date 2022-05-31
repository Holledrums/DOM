const color = prompt("welcome farbe?");

//get body element / Element im HTML finden
const body = document.querySelector("body");

// style ändernqueryselector
// body.style.backgroundColor = color;
const sections = document.querySelectorAll("section");

sections.forEach((sec) => (sec.style.backgroundColor = color));
