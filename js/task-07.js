"use strict";

const inputSizeRef = document.querySelector("#font-size-control");
const spanSizeRef = document.querySelector("#text");

inputSizeRef.addEventListener("input", handleSizeRange);

function handleSizeRange(event) {
  spanSizeRef.style.fontSize = event.target.value + "px";
}
