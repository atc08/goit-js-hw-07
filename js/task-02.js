"use strict";
const ingredientsRef = document.querySelector("#ingredients");
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createLi = ingredients.map((elem) => {
  const elemRef = document.createElement("li");
  elemRef.textContent = elem;
  return elemRef;
});
ingredientsRef.append(...createLi);
console.log(ingredientsRef);
