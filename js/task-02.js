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

// const firstElemRef = document.createElement("li");
// firstElemRef.textContent = ingredients[0];
// const secondElemRef = document.createElement("li");
// secondElemRef.textContent = ingredients[1];
// const thirdElemRef = document.createElement("li");
// thirdElemRef.textContent = ingredients[2];
// const fourthElemRef = document.createElement("li");
// fourthElemRef.textContent = ingredients[3];
// const fifthElemRef = document.createElement("li");
// fifthElemRef.textContent = ingredients[4];
// const sixthElemRef = document.createElement("li");
// sixthElemRef.textContent = ingredients[5];
// ingredientsRef.append(
//   firstElemRef,
//   secondElemRef,
//   thirdElemRef,
//   fourthElemRef,
//   fifthElemRef,
//   sixthElemRef
// );

// console.log(ingredientsRef);
