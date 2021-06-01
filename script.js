var daysElement = document.getElementById("days");
var hourElement = document.getElementById("hours");
let minElement = document.querySelector('#mins');
const secElement = document.getElementById("seconds")
const newYears = "2022 1 1";
var dayCon = document.getElementById('days');
function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds/3600/24);
  const hours = Math.floor(totalSeconds/3600)%24;
  const mins = Math.floor(totalSeconds/60)%60;
  const seconds = Math.floor(totalSeconds)%60;
  // console.log(days,hours,mins, seconds)
  daysElement.innerHTML = days;
  hourElement.innerHTML = timeF(hours);
  minElement.innerHTML = timeF(mins);
  secElement.innerHTML = timeF(seconds);
}
function timeF(time){
  return time<10 ? `0${time}` : time;
}
countdown();
setInterval(countdown , 1000);

