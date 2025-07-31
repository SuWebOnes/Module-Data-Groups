let timeRemaining = 0;
let intervalId;
const audio = new Audio("alarmsound.mp3");

/**
 * Sets the alarm countdown.
 * Validates input, resets alarm and timer.
 */
function setAlarm() {
  const input = document.getElementById("alarmSet");
  timeRemaining = parseInt(input.value, 10);

  // Validation: check for valid number
  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    alert("Please enter a positive number of seconds.");
    return;
  }

  // Clear any existing countdown
  if (intervalId) {
    clearInterval(intervalId);
  }

  // Pause any currently playing alarm sound
  pauseAlarm(true);

  // Update the initial time display
  updateTimeDisplay();

  // Start new interval countdown
  intervalId = setInterval(() => {
    timeRemaining--;
    updateTimeDisplay();

    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      playAlarm();
    }
  }, 1000);
}

/**
 * Updates the countdown time on screen
 */
function updateTimeDisplay() {
  const heading = document.getElementById("timeRemaining");
  const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, "0");
  const seconds = (timeRemaining % 60).toString().padStart(2, "0");
  heading.innerText = `Time Remaining: ${minutes}:${seconds}`;
}

/**
 * Plays the alarm sound from beginning
 */
function playAlarm() {
  audio.currentTime = 0;
  audio.play();
}

/**
 * Stops the alarm sound
 * @param {boolean} resetAudio - if true, reset to start
 */
function pauseAlarm(resetAudio = false) {
  audio.pause();
  if (resetAudio) {
    audio.currentTime = 0;
  }
}

/**
 * Setup event listeners after page load
 */
function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", () => pauseAlarm(true));
}

window.onload = setup;
