const apiCharacterURL = "https://rickandmortyapi.com/api/character ";

let images;

// async functionen geben immer eine Promise zurück
const rickMortyCharacters = async () => {
  const response = await fetch(apiCharacterURL);
  const data = await response.json(); // json Methode von fetch response macht JSON.parse

  //gibt Array zurück
  renderCharacters(data);
};

function renderCharacters(data) {
  //      Array           object              string
  images = data.results.map((character) => character.image);

  data.results.forEach((character) => {
    const img = document.createElement("img");
    img.src = character.image;
    document.body.appendChild(img);
  });
}

rickMortyCharacters();
// fetch(apiCharacterURL)
//   .then((response) => response.json())
//   .then((obj) => renderCharacters(obj))
//   .then((images) => console.log(images));

// function renderCharacters(data) {
//   images = data.results.map((character) => character.image);

//   data.results.forEach((character) => {
//     const img = document.createElement("img");
//     img.src = character.image;
//     document.body.appendChild(img);
//   });
//   return images;
// }
