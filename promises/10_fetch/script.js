// daten laden
fetch("https://raw.githubusercontent.com/fbw-d05/data/main/team")
  // Promise 'fetch löst automatisch ein promise aus'

  // 1. Promise: Download wird beginnen
  .then((response) => {
    const datas = response.text();
    // Download hat begonnen
    // 2. Promise: Download wird abgeschlossen sein und
    // die Antwort wird als Text zurückgegeben werden
    if (!response.ok) throw new Error("konnte nicht geladen werden");

    return datas;
  })
  .then((data) => renderTeam(data))
  .catch(loadingFailure);

["home", "Products", "Team"].forEach((item) => {
  // Navigation generieren
});

function renderTeam(team) {
  const teamMates = team.split(",");

  const list = document.createElement("ul");
  teamMates.forEach((firstName) => {
    const li = document.createElement("li");
    li.textContent = firstName;
    list.appendChild(li);
  });
  document.body.appendChild(list);
}

function loadingFailure() {
  const errorMessage = document.createElement("h2");
  errorMessage.style.color = "red";
  errorMessage.textContent = "Daten konnten nicht geladen werden";
  document.body.appendChild(errorMessage);
}
