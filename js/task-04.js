"use strict";

const plusBtnRef = document.querySelector('button[data-action="increment"]');
const minusBtnRef = document.querySelector('button[data-action="decrement"]');
const spanRef = document.querySelector("#value");

let counterValue = Number(spanRef.textContent);
const increment = () => {
  spanRef.textContent = counterValue += 1;
};
const decrement = () => {
  spanRef.textContent = counterValue -= 1;
};

plusBtnRef.addEventListener("click", increment);
minusBtnRef.addEventListener("click", decrement);
