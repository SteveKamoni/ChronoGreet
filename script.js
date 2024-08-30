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
    greetText.innerHTML = `<section class="content2 fade-in"><div style="text-align:center" >Good Morning☀️,</div> <br> right now its currently ${hour} : ${formatedMinutes} AM</section>`;
  } else if (hour > 12 && hour < 17) {
    greetText.innerHTML = `<section class="content2 fade-in"><div style="text-align:center">Good AFternoon🌇,</div> <br> right now its currently ${hour} : ${formatedMinutes} PM</section>`;
  } else {
    greetText.innerHTML = `<section class="content2 fade-in"><div style="text-align:center" >Good Evening🌃,</div> <br> right now its currently ${hour} : ${formatedMinutes} PM</section>`;
  }
});

// ? fade section

function handleScroll() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);

// Trigger the scroll event on load to handle elements already in view
window.addEventListener("load", handleScroll);
