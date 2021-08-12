const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = menu.querySelector(".menu__close"),
  menuOverlay = menu.querySelector(".menu__overlay"),
  percent = document.querySelectorAll(".statistic__percent"),
  lines = document.querySelectorAll(".statistic__line span");

hamburger.addEventListener("click", showHamburger);

closeElem.addEventListener("click", hideHamburger);

percent.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

function showHamburger() {
  menu.classList.add("active");
  document.body.style.overflow = "hidden";
}

function hideHamburger() {
  menu.classList.remove("active");
  document.body.style.overflow = "";
}

menuOverlay.addEventListener("click", hideHamburger);

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" || menu.classList.contains("active")) {
    hideHamburger();
  }
});
