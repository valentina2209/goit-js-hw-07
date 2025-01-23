const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    elements.push(box);
    size += 10;
  }

  boxesContainer.innerHTML = ""; // Очистити попередні елементи
  boxesContainer.append(...elements); // Додати нові елементи
}

function destroyBoxes() {
  boxesContainer.innerHTML = ""; // Очищення контейнера
}

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value.trim(), 10);

  if (!amount || amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100.");
    input.value = ""; // Очищення input
    return;
  }

  createBoxes(amount);
  input.value = ""; // Очищення input
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
