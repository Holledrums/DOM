/*
// Local Storage
// ein Item anlegen
localStorage.setItem("Sprachauswahl", "Deutsch");

// ein Item abfragen
const language = localStorage.getItem("Sprachauswahl");
console.log(language);
alert(language);

// ein Item Löschen
localStorage.removeItem("Sprachauswahl");*/

// Begrüßung
const greeting = () => {
  const user = localStorage.getItem("Benutzer");
  if (user != null) {
    document.querySelector(
      "#greeting"
    ).innerHTML = `hallo herzlich willkommen ${user}`;
  }
};

const saveName = () => {
  const name = document.querySelector("#name").value;
  localStorage.setItem("Benutzer", name);
  greeting();
};
greeting();

// löscht denNutzer und die local Storage
const removeUser = () => {
  localStorage.removeItem("Benutzer");
  document.querySelector("#greeting").innerHTML = "Tschau mit V";
};
