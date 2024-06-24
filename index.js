document.addEventListener("DOMContentLoaded", () => {
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");
  const timer = document.getElementById("timer");

  let startTime = 0;
  let elapsedTime = 0;
  let timerInterval;

  const startTimer = () => {
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      timer.textContent = formatTime(elapsedTime);
    }, 10);

    start.disabled = true;
    stop.disabled = false;
  };

  const stopTimer = () => {
    clearInterval(timerInterval);

    start.disabled = false;
    stop.disabled = true;
  };

  const resetTimer = () => {
    clearInterval(timerInterval);

    elapsedTime = 0;
    timer.textContent = "00:00:00";

    start.disabled = false;
    stop.disabled = true;
  };

  const formatTime = (elapsedTime) => {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));

    return (
      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
      ":" +
      (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
      ":" +
      (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );
  };

  start.addEventListener("click", () => {
    startTimer();
  });

  stop.addEventListener("click", () => {
    stopTimer();
  });

  reset.addEventListener("click", () => {
    resetTimer();
  });
});
