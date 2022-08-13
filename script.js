const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minutesEL = document.getElementById("mins");
const secondsEL = document.getElementById("seconds");

function countdown() {
  const getDate = document.getElementById("date").value;

  const newYearDate = new Date(getDate);
  let currentDate = new Date();

  let presentDate = currentDate.toISOString().slice(0, 10);
  if (presentDate > getDate) {
    alert("Please Enter Date");
  } else {
    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTimer(hours);
    minutesEL.innerHTML = formatTimer(minutes);
    secondsEL.innerHTML = formatTimer(seconds);
    setInterval(countdown, 1000);
  }
}

function formatTimer(time) {
  return time < 10 ? `0${time}` : time;
}
