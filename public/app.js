particlesJS.load("particles-js", "../particlesjs-config.json", function () {
  //console.log("callback - app.js config loaded");
});

document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("theme-button");
  const icon = document.getElementById("iconImage");

  themeButton.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);

    if (newTheme === "dark") {
      icon.src = "./images/logo-icons/bxs-sun.png";
    } else if (newTheme === "light") {
      icon.src = "./images/logo-icons/bxs-moon.png";
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      //console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
});

function navFunction() {
  let x = document.getElementById("nav-bar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Browser Icon
let link = document.querySelector("link[rel~='icon']");
if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.head.appendChild(link);
}
link.href = "./images/logo-icons/black-icon-transparentbg.png";
