"use strict";

const itemRef = document.querySelectorAll(".item");

console.log(`"В списке ${itemRef.length} категории"`);

const titleRef = document.querySelectorAll("h2");
const elementRef = document.querySelectorAll(".item > ul");

console.log(`Категория: ${titleRef[0].textContent}`);
console.log(`Количество элементов: ${elementRef[0].children.length}`);
console.log(`Категория: ${titleRef[1].textContent}`);
console.log(`Количество элементов: ${elementRef[1].children.length}`);
console.log(`Категория: ${titleRef[2].textContent}`);
console.log(`Количество элементов: ${elementRef[2].children.length}`);
