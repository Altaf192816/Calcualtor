"use strict";
const input = document.getElementById("input");
const pointBtn = document.querySelector(".point");
const resetbtn = document.querySelector(".red");
const eqaulbtn = document.querySelector(".equal");
const deleteNumBtn = document.querySelector(".backspace");
const numbersBtnArr = [...document.querySelectorAll(".grey")];
const operationBtnArr = [...document.querySelectorAll(".orange")];
///////////////////////////////////////////////////////////////
let operation;
let temp;

const operationFunc = function () {
  if (!operation) return;
  switch (operation) {
    case "+":
      temp = +temp + +input.value;
      break;
    case "-":
      temp = +temp - +input.value;
      break;
    case "/":
      if (temp.includes(".") || input.value.includes(".")) {
        temp = (+temp / +input.value).toFixed(2);
      } else {
        temp = +temp / +input.value;
      }
      break;
    case "*":
      if (temp.includes(".") || input.value.includes(".")) {
        temp = (+temp * +input.value).toFixed(2);
      } else {
        temp = +temp * +input.value;
      }
      break;
    case "%":
      temp = +temp % +input.value;
      break;
    case "^":
      temp = (+temp) ** +input.value;
      break;
    default:
      break;
  }
  input.value = temp + "";
};

const getInputNumber = function () {
  const number = this.textContent;
  input.value += number;
};

const getInputOperation = function () {
  const operationString = this.textContent;
  if (operationString === "=" || operationString === ".") return;
  temp = input.value;
  input.value = "";
  operation = operationString;
};

const addDecimal = function () {
  if (!input.value) return;
  input.value += ".";
  pointBtn.removeEventListener("click", addDecimal);
};

const reset = function () {
  input.value = "";
  temp = 0;
};

const deleteLastNum = function () {
  const newInput = input.value.slice(0, -1);
  input.value = newInput;
};

const eventListeners = function () {
  eqaulbtn.addEventListener("click", operationFunc);
  numbersBtnArr.forEach((el) => el.addEventListener("click", getInputNumber));
  operationBtnArr.forEach((el) =>
    el.addEventListener("click", getInputOperation)
  );
  pointBtn.addEventListener("click", addDecimal);
  resetbtn.addEventListener("click", reset);
  deleteNumBtn.addEventListener("click", deleteLastNum);
};
eventListeners();
