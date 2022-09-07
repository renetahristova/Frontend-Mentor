const menuElement = document.querySelector(".hamburger");
const responsiveElement = document.querySelector(".responsive");

const hideClassName = "hide";
menuElement.addEventListener("click", function () {
  responsiveElement.classList.toggle(hideClassName);
});
