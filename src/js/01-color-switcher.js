const startButtonRef = document.querySelector('[data-start]');
const stopButtonRef = document.querySelector('[data-stop]');

const colorSwitcher = {
  intervalId: null,

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },

  start() {
    this.intervalId = setInterval(() => {
      document.body.style.backgroundColor = this.getRandomHexColor();
    }, 1000);
    startButtonRef.disabled = true;
  },

  stop() {
    clearInterval(this.intervalId);
    startButtonRef.disabled = false;
  },
};

startButtonRef.addEventListener('click', colorSwitcher.start.bind(colorSwitcher));
stopButtonRef.addEventListener('click', colorSwitcher.stop.bind(colorSwitcher));
