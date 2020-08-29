"use strict";

const itemRef = document.querySelectorAll(".item");

console.log(`"В списке ${itemRef.length} категории"`);

const titleRef = document.querySelectorAll("h2");
const elementRef = document.querySelectorAll(".item > ul");

// function itemOfList(cat, quan) {
//   cat = `Категория: ${titleRef[].textContent}`;
//   quan = `Количество элементов: ${elementRef[2].children.length}`;
//   return console.log(cat, quan);
// }
// console.log(itemOfList());

console.log(`Категория: ${titleRef[0].textContent}`);
console.log(`Количество элементов: ${elementRef[0].children.length}`);
console.log(`Категория: ${titleRef[1].textContent}`);
console.log(`Количество элементов: ${elementRef[1].children.length}`);
console.log(`Категория: ${titleRef[2].textContent}`);
console.log(`Количество элементов: ${elementRef[2].children.length}`);
