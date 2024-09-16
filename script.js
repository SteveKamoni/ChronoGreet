const greetText = document.querySelector(".greet");
const Hours = document.querySelector(".hrs");
const Minutes = document.querySelector(".min");
const Seconds = document.querySelector(".sec");
const button = document.querySelector(".btn");
const defBtn = document.querySelector(".default");
const lightBtn = document.querySelector(".light");
const darkBtn = document.querySelector(".dark");
const mainSect = document.querySelector(".main-sect");
const clock = document.querySelector(".clock");

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
    greetText.innerHTML = `<section class="content2 fade-in"><div style="text-align:center">Good Evening🌃,</div> <br>Rright Now Its Currently ${hour} : ${formatedMinutes} PM</section>`;
  }

  const savedTheme = localStorage.getItem("theme");
  const savedColor = localStorage.getItem("color");
  if (savedTheme && savedColor) {
    mainSect.style.backgroundColor = savedTheme;
    mainSect.style.color = savedTheme;
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

//* ideas to add
// Add a modal on load and theere is a quote depending on the mood

//* Theme secction
//! use reload for smooth transitions
//! work on themes with beter color palette
// ! current system does not allow the themme to be consistent on reload, create new system

defBtn.addEventListener("click", () => {
  mainSect.style.backgroundImage = "  ";
});

lightBtn.addEventListener("click", () => {
  const theme = "rgba(239, 235, 235, .5)";
  const color = "#e5e8e8";

  mainSect.style.backgroundColor = theme;
  mainSect.style.color = color;

  localStorage.setItem("theme", theme);
  localStorage.setItem("color", color);
});

darkBtn.addEventListener("click", () => {
  const darktheme =
    "linear-gradient(90deg, rgba(23,32,42,0.85), rgba(44,62,80,1))";
  const darkcolor = "#FF7E54";
  mainSect.style.backgroundImage = darktheme;
  mainSect.style.color = darkcolor;
  localStorage.setItem("theme", darktheme);
  localStorage.setItem("color", darkcolor);
});
