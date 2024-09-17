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
// function call
updateTime();

// function reference
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
//use reload for smooth transitions
//work on themes with beter color palette
//todo current system does not allow the themme to be consistent on reload, create new system

//? Theme Section
const themes = {
  default: {
    background:
      "linear-gradient(90deg, rgba(52, 73, 94, 0.5801492471988796) 100%, rgba(239, 235, 235,1)100%)",
    color: "#f4f6f7",
  },
  dark: {
    background: "linear-gradient(90deg, rgba(23,32,42,0.85), rgba(44,62,80,1))",
    color: "#FF7E54",
  },
  light: {
    background:
      "linear-gradient(90deg, rgba(45,48,70,0.9009103641456583) 100%, rgba(255,255,255,1) 100%)",
    color: "#e5e8e8",
  },
};
localStorage.setItem("themes", JSON.stringify(themes));

defBtn.addEventListener("click", () => {
  // calling the theme
  const storedTheme = JSON.parse(localStorage.getItem("themes"));
  // store the theme
  const selectedTheme = storedTheme.default;

  // use the theme
  mainSect.style.background = selectedTheme.background;
  mainSect.style.color = selectedTheme.color;

  // saving the theme
  localStorage.setItem("selectedTheme", "default");
});

lightBtn.addEventListener("click", () => {
  const storedTheme = JSON.parse(localStorage.getItem("themes"));
  const selectedTheme = storedTheme.light;

  mainSect.style.background = selectedTheme.background;
  mainSect.style.color = selectedTheme.color;

  localStorage.setItem("selectedTheme", "light");
});

darkBtn.addEventListener("click", () => {
  const storedTheme = JSON.parse(localStorage.getItem("themes"));
  const selectedTheme = storedTheme.dark;

  mainSect.style.background = selectedTheme.background;
  mainSect.style.color = selectedTheme.color;

  localStorage.setItem("selectedTheme", "dark");
});

// ensure the theme is saved on load
window.addEventListener("load", () => {
  const savedThemeName = localStorage.getItem("selectedTheme");

  if (savedThemeName) {
    const storedThemes = JSON.parse(localStorage.getItem("themes"));

    const savedTheme = storedThemes[savedThemeName];
    mainSect.style.background = savedTheme.background;
    mainSect.style.color = savedTheme.color;
  }
});
