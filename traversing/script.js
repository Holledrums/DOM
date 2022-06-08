const buttons = document.querySelectorAll(".concert-list li button");
buttons.forEach((button) => {
  button.addEventListener("click", selectConcert);
});

function selectConcert() {
  // das ausgewählte Konzert hervorheben
  console.log("click");
}
