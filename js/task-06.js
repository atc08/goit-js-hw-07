"use strict";

const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  if (event.target.value.length === +inputRef.attributes["data-length"].value) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}

// function handleInputBlur(event) {
//   if (event.target.value.length === +inputRef.dataset.length) {
//     inputRef.classList.add("valid");
//     inputRef.classList.remove("invalid");
//   } else {
//     inputRef.classList.add("invalid");
//     inputRef.classList.remove("valid");
//   }
// }
