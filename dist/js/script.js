const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close"),
  percent = document.querySelectorAll(".statistic__percent"),
  lines = document.querySelectorAll(".statistic__line span");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
  document.body.style.overflow = "";
});

percent.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
