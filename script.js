const timer = document.getElementById("timer");
const times = document.getElementById("times");

var start = document.getElementById("start");
var stop = document.getElementById("stop");
stop.disable = true;

let timing = false;
let sec = 0;
let min = 0;
let hour = 0;
let day = 0;
let timerSec = "";
let timerMin = "";
let timerHour = "";
let logs = 0;
let lastTime = performance.now();

displayTime();

function displayTime() {
  const currentTime = performance.now();

  if (currentTime - lastTime >= 1000) {
    if (timing === true) {
      sec++;
      if (sec === 60) {
        min++;
        sec = 0;
      }
      if (min === 60) {
        hour++;
        min = 0;
      }
      if (hour === 24) {
        day++;
        hour = 0;
      }

      if (sec < 10) {
        timerSec = `0${sec}`;
      } else {
        timerSec = sec;
      }

      if (min < 10) {
        timerMin = `0${min}`;
      } else {
        timerMin = min;
      }

      if (hour < 10) {
        timerHour = `0${hour}`;
      } else {
        timerHour = hour;
      }

      if (day === 0) {
        timer.textContent = `${timerHour}:${timerMin}:${timerSec}`;
      } else timer.textContent = `${day}:${timerHour}:${timerMin}:${timerSec}`;
    }
    lastTime = currentTime;
  }

  requestAnimationFrame(displayTime);
}

function startTimer() {
  start.disabled = true;
  stop.disabled = false;
  timing = true;
}

function stopTimer() {
  appendTime();
  start.disabled = false;
  stop.disabled = true;
  sec = 0;
  min = 0;
  hour = 0;
  timer.textContent = "00:00:00";
  timing = false;
}

function appendTime() {
  logs++;
  const logTime = document.createElement("p");
  if (day === 0) {
    logTime.innerText = `Time ${logs}: ${timerHour}:${timerMin}:${timerSec}`;
  } else {
    logTime.innerText = `Time ${logs}: ${timerDay}:${timerHour}:${timerMin}:${timerSec}`;
  }
  times.appendChild(logTime);
}
