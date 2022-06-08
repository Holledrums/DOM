const buttons = document.querySelectorAll(".concert-list li button");
buttons.forEach((button) => {
  button.addEventListener("click", selectConcert);
});

function selectConcert(event /*Event Object */) {
  // das ausgewählte Konzert hervorheben
  const button = event.target;
  // parent, egal auf welcher Ebene
  const concert = button.closest("li");
  console.log("click", concert);
  concert.style.backgroundColor = "red";
}
