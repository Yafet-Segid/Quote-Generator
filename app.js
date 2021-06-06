const button = document.getElementById("btn");
const header = document.getElementById("main");

button.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((result) => result.json())
    .then((data) => {
      header.innerText = data.slip.advice;
    });
});
