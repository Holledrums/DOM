const container = document.querySelector("#container");
// IIFE
(async () => {
  const corsProxy = "https://corsanywhere.herokuapp.com";
  const apiURL = "https://openwhyd.org/adrien?format=json";
  const response = await fetch(`${corsProxy}/${apiURL}`);
  const posts = await response.json();
  console.log(posts);

  posts.forEach((track) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    const prefix = track.eId.substr(1, 2);
    const trackId = track.eId.substr(4);

    let trackURL;

    switch (prefix) {
      case "yt":
        trackURL = "https://youtube.com/watch?v=" + trackId;

        break;

      default:
        trackURL = "https://youtube.com/watch?v=" + track.eId;
        break;
    }

    link.textContent = track.name;
    link.href = trackURL;
    link.setAttribute("target", "_blank");

    li.appendChild(link);
    container.appendChild(li);
  });
})();
