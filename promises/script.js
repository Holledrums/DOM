// daten laden
fetch("https://raw.githubusercontent.com/fbw-d05/data/main/team")
  // Promise 'fetch löst automatisch ein promise aus'

  // 1. Promise: Download wird beginnen
  .then((response) => {
    // Download hat begonnen
    // 2. Promise: Download wird abgeschlossen sein und
    // die Antwort wird als Text zurückgegeben werden
    return response.text();
  })
  .then(renderTeam);

loadingWillStart.then(response);

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
