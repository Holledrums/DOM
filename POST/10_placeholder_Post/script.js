const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  console.log(posts);

  posts.forEach((element) => {
    const post = document.createElement("div");
    const title = document.createElement("h2");
    const content = document.createElement("p");

    title.textContent = element.title;
    content.textContent = element.body;

    post.appendChild(title);
    post.appendChild(content);

    document.body.appendChild(post);
  });
}

getPosts();

form.addEventListener("submit", createPost);

async function createPost(event) {
  event.preventDefault();

  const title = titleInput.value;
  const postContent = bodyInput.value;

  console.log(title, postContent);

  // Daten an server schicken

  await fetch("https://jsonplaceholder.typicode.com/posts");
}
