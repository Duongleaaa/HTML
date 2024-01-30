let input = document.querySelector(".input");
let button = document.querySelector(".button");

button.onclick = function () {
  let player = {
    id: Math.ceil(Math.random() * 10000000),
    name: input.value,
  };

  let playerJson = JSON.stringify(player);
  localStorage.setItem(`${player.id}`, playerJson);

  let playerRe = localStorage.getItem(`${player.id}`);
  let playerStore = JSON.parse(playerRe);

  let display = document.querySelector(".display");
  display.innerHTML = `
    <p>id:${playerStore.id}</p>
    <p>name:${playerStore.name}</p>
    `;
};
