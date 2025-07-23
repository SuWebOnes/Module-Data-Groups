let timeRemaining = 0;
let intervalId;

function setAlarm() {
  // Get the input value (number of seconds)
  const input = document.getElementById("alarmSet");
  timeRemaining = parseInt(input.value, 10);

  // Immediately update the display
  updateTimeDisplay();

  // Clear any existing timer
  if (intervalId) {
    clearInterval(intervalId);
  }

    // Set up the countdown timer
  intervalId = setInterval(() => {
    timeRemaining--;

    updateTimeDisplay();

    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      playAlarm();
    }
  }, 1000);
}

function updateTimeDisplay() {
  const heading = document.getElementById("timeRemaining");
  const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, "0");
  const seconds = (timeRemaining % 60).toString().padStart(2, "0");
  heading.innerText = `Time Remaining: ${minutes}:${seconds}`;
}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
