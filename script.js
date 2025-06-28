let timer;
let isRunning = false;
let timeLeft = 5;
let pomodoros = localStorage.getItem('pomodoros') || 0;

const timerEl = document.getElementById('timer');
const countEl = document.getElementById('count');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const themeToggle = document.getElementById('theme-toggle');
const resetPomosBtn = document.getElementById('reset-pomos');

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning){
    return;
  }
  isRunning = true;
  timer = setInterval(() => {
    timeLeft--;
    updateDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      isRunning = false;
      pomodoros++;
      localStorage.setItem('pomodoros', pomodoros);
      countEl.textContent = pomodoros;
      alert("Pomodoro complete! Time for a break. 🍅");
      timeLeft = 5; 
      updateDisplay();
    }
  }, 1000);
}


function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 5;
  updateDisplay();
}


function resetPomodoros() {
  pomodoros = 0;
  localStorage.setItem('pomodoros', pomodoros);
  countEl.textContent = pomodoros;
}

resetPomosBtn.addEventListener('click', resetPomodoros);



function toggleTheme() {
  document.querySelector('body').classList.toggle('dark-mode');
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
themeToggle.addEventListener('click', toggleTheme);


updateDisplay();
countEl.textContent = pomodoros;

