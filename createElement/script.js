const navString = prompt("Navigation");
const navItems = navString.split(",");
// const body = document.querySelector("body");
const nav = document.querySelector("header nav");
// Element erzeugen

const ulElement = document.createElement("ul");

navItems.forEach((item, index) => {
  const liElement = document.createElement("li");
  // Text ins Element einfügen
  liElement.textContent = item;
  // Class ins Element einfügen / class property ändern
  liElement.classList.add("nav-element");

  ulElement.appendChild(liElement);

  if (index === 0) liElement.classList.add("active");
});

console.log(nav.classList);
nav.classList.add("big", "animate");
// Element ins DOM einfügen
nav.appendChild(ulElement);
