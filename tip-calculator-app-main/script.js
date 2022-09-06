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

const resetFunction = resetBtnElement.addEventListener("click", (e) => {
  e.preventDefault();
  billInputElement.value = "";
  numberOfPeopleElement.value = "";
  customInputElement.value = "";
  amoundElement.textContent = "$00.00";
  totalElement.textContent = "$00.00";

  console.log("np");
});
