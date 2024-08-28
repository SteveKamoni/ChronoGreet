const greetText = document.querySelector(".greet");
const Hours = document.querySelector(".hrs");
const Minutes = document.querySelector(".min");
const Seconds = document.querySelector(".sec");
const button = document.querySelector(".btn");

function updateTime() {
  // update the time
  const currentTime = new Date();
  const hrs = currentTime.getHours();
  const min = currentTime.getMinutes();
  const sec = currentTime.getSeconds();

  //    change the time fomrat
  const hours = hrs.toString().padStart(2, "0");
  const minutes = min.toString().padStart(2, "0");
  const seconds = sec.toString().padStart(2, "0");

  //  change the dislay of text

  Hours.innerHTML = `${hours}   :`;
  Minutes.innerHTML = `${minutes}  :`;
  Seconds.innerHTML = `${seconds}`;
}

updateTime();

setInterval(updateTime, 1000);

window.addEventListener("load", () => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const formatedMinutes = minute.toString().padStart(2, "0");

  if (hour > 1 && hour < 12) {
    greetText.textContent = `Good Morning, right now its currently ${hour} : ${formatedMinutes} AM`;
  } else if (hour > 12 && hour < 15) {
    greetText.innerHTML = `<div style="text-align:center">Good Afternoon,</div> <br> Right now its currently ${hour}: ${formatedMinutes} PM`;
  } else if (hour > 15) {
    greetText.textContent = `Good Eveining! Right now its currently ${hour} : ${formatedMinutes} PM`;
  }
});
