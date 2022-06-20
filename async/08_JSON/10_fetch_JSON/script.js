const apiCharacterURL = "https://rickandmortyapi.com/api/character ";

let images;

fetch(apiCharacterURL)
  .then((response) => response.json())
  .then((obj) => renderCharacters(obj))
  .then((images) => console.log(images));

function renderCharacters(data) {
  images = data.results.map((character) => character.image);

  data.results.forEach((character) => {
    const img = document.createElement("img");
    img.src = character.image;
    document.body.appendChild(img);
  });
  return images;
}
