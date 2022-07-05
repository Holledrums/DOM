const images = document.querySelectorAll("main img");
const loader = document.querySelector("#loader");
const main = document.querySelector("main");

function loadImage(img) {
  const imageLoadPromise = new Promise((resolve, reject) => {
    img.addEventListener("load", resolve);
  });
  return imageLoadPromise;
}

checkLoading();

async function checkLoading() {
  //     [promise, promise]               Promise
  const imagePromises = Array.from(images).map((img) => loadImage(img));

  await Promise.all([
    startTimeout(), // Promise
    ...imagePromises, // destructuring ...[Promise, Promise]
  ]);
  transitionAfterLoading();
}

function startTimeout() {
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
  return timeoutPromise;
}

function transitionAfterLoading() {
  loader.style.display = "none";
  main.style.opacity = 1;
}
