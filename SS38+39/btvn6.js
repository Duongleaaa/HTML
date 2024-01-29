let bigGlass = document.getElementById("bigGlass");
let waterLevel = document.getElementById("waterLevel");

let totalWater = 0;

function drinkWater(amount) {
  totalWater += amount;
  updateWaterLevel();
}

function updateWaterLevel() {
  let goal = 2000;
  let percentage = Math.min((totalWater / goal) * 100, 100);
  waterLevel.style.height = `${percentage}%`;
}

document.getElementById("glassButton1").addEventListener("click", function () {
  drinkWater(250);
});

document.getElementById("glassButton2").addEventListener("click", function () {
  drinkWater(250);
});

document.getElementById("glassButton3").addEventListener("click", function () {
  drinkWater(250);
});

document.getElementById("glassButton4").addEventListener("click", function () {
  drinkWater(250);
});

document.getElementById("glassButton5").addEventListener("click", function () {
  drinkWater(250);
});

document.getElementById("glassButton6").addEventListener("click", function () {
  drinkWater(250);
});

document.getElementById("glassButton7").addEventListener("click", function () {
  drinkWater(250);
});

document.getElementById("glassButton8").addEventListener("click", function () {
  drinkWater(250);
});

updateWaterLevel();
