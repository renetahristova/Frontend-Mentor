"use strict";
//inputs
let billInputElement = document.getElementById("bill");
let numberOfPeopleElement = document.getElementById("people");
//div element -- input
let billInput = document.querySelector(".input-bill");
let peopleInput = document.querySelector(".input-people");
//percent buttons
let fivePercent = document.querySelector(".five");
let tenPercent = document.querySelector(".ten");
let fifteenPercent = document.querySelector(".fifteen");
let twentyfivePercent = document.querySelector(".twentyfive");
let fiftyPercent = document.querySelector(".fifty");
let customPercent = document.querySelector(".btn-custom");
let customInputElement = document.querySelector("#custom");

// results
let amoundElement = document.querySelector("#amound-p");
let totalElement = document.querySelector("#total-p");
// reset
let resetBtnElement = document.querySelector(".btn-reset");
//error
let errorrMsgElement = document.querySelector("#error-msg");

const resetFunction = resetBtnElement.addEventListener("click", (e) => {
  e.preventDefault();
  billInputElement.value = "";
  numberOfPeopleElement.value = "";
  customInputElement.value = "";
  amoundElement.textContent = "$00.00";
  totalElement.textContent = "$00.00";
});
// ---ERROR---
const displayError = function () {
  errorrMsgElement.style.visibility = "visible";
};
const hideError = function () {
  errorrMsgElement.style.visibility = "hidden";
};

billInput.addEventListener("input", (e) => {
  let billValue = e.target.value;
  console.log(billValue);
});
numberOfPeopleElement.addEventListener("input", (e) => {
  let peopleValue = e.target.value;
  console.log(peopleValue);
});
customInputElement.addEventListener("input", (e) => {
  let customValue = e.target.value;
  console.log(customValue);
});

let buttons = document.querySelectorAll(".select-tip");
console.log(buttons);
buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", function () {
    let prc = this.value;
    console.log(prc);
  });
});
//to do: calculate function
