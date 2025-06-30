let timer;
let isrunning = false;
let timeleft = 25*60;
let pomodoros = localStorage.getItem('pomodoros') || 0;

const timerp = document.getElementById('timer');
const countp = document.getElementById('count');
const startb = document.getElementById('start');
const resetb = document.getElementById('reset');
const theme = document.getElementById('theme-toggle');
const resetpomob = document.getElementById('reset-pomos');

function updateDisplay() {
  let mins = Math.floor(timeleft / 60);
  let secs = timeleft % 60;
  timerp.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (isrunning){
    return;
  }
  isrunning = true;
  timer = setInterval(function () {
    timeleft--;
    updateDisplay();
    if (timeleft <= 0) {
      clearInterval(timer);
      isrunning = false;
      pomodoros++;
      localStorage.setItem('pomodoros', pomodoros);
      countp.textContent = pomodoros;
      alert("Pomodoro complete! Time for a break. 🍅");
      timeleft = 25*60; 
      updateDisplay();
    }
  }, 1000);
}


function resetTimer() {
  clearInterval(timer);
  isrunning = false;
  timeleft = 25*60;
  updateDisplay();
}


function resetPomodoros() {
  pomodoros = 0;
  localStorage.setItem('pomodoros', pomodoros);
  countp.textContent = pomodoros;
}

resetpomob.addEventListener('click', resetPomodoros);



function toggleTheme() {
  document.querySelector('body').classList.toggle('dark-mode');
}

startb.addEventListener('click', startTimer);
resetb.addEventListener('click', resetTimer);
theme.addEventListener('click', toggleTheme);



