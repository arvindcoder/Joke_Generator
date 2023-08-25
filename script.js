const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const loader = document.querySelector(".ring");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const getJoke = () => {
  jokeContainer.style.display = "none";
  loader.style.display = "block";
  fetch(url)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((item) => {
      jokeContainer.style.display = "block";
      loader.style.display = "none";
      jokeContainer.textContent = `${item.joke}`;
    })
    .catch((error) => console.log(error.message));
};
getJoke();
btn.addEventListener("click", getJoke);
