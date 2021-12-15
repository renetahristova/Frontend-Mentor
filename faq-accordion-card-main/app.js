let buttonElement = document.querySelectorAll(".accordion");
let panelElement = document.querySelectorAll(".panel");
console.log(buttonElement);
console.log(panelElement);

buttonElement.forEach((button) => {
  button.addEventListener("click", (e) => {
    // e.preventDefault();
    button.classList.toggle("active");

    let panel = button.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
