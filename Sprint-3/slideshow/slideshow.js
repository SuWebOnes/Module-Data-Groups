const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let current = 0;
let intervalId = null;

const img = document.getElementById("carousel-img");
const forward = document.getElementById("forward-btn");
const backward = document.getElementById("backward-btn");
const autoForward = document.getElementById("auto-forward");
const autoBack = document.getElementById("auto-backward");
const stop = document.getElementById("stop");

function updateImage() {
  img.src = images[current];
}

forward.addEventListener("click", () => {
  current = (current + 1) % images.length;
  updateImage();
});

backward.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  updateImage();
});

autoForward.addEventListener("click", () => {
  disableAutoButtons(true);
  intervalId = setInterval(() => {
    current = (current + 1) % images.length;
    updateImage();
  }, 2000);
});

autoBack.addEventListener("click", () => {
  disableAutoButtons(true);
  intervalId = setInterval(() => {
    current = (current - 1 + images.length) % images.length;
    updateImage();
  }, 2000);
});

stop.addEventListener("click", () => {
  clearInterval(intervalId);
  disableAutoButtons(false);
});

function disableAutoButtons(disable) {
  autoForward.disabled = disable;
  autoBack.disabled = disable;
}
const delayInput = document.getElementById("delay-input");

function getDelay() {
  const value = parseInt(delayInput.value, 10);
  return isNaN(value) || value < 500 ? 2000 : value; // default to 2000ms
}

autoForward.addEventListener("click", () => {
  disableAutoButtons(true);
  intervalId = setInterval(() => {
    current = (current + 1) % images.length;
    updateImage();
  }, getDelay());
});

autoBack.addEventListener("click", () => {
  disableAutoButtons(true);
  intervalId = setInterval(() => {
    current = (current - 1 + images.length) % images.length;
    updateImage();
  }, getDelay());
});
