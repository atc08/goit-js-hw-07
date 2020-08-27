"use strict";

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesRef = document.querySelector("#gallery");
const createImgList = (images) => {
  const createLi = document.createElement("li");
  const createImg = document.createElement("img");
  createImg.setAttribute("src", images.url);
  createImg.setAttribute("alt", images.alt);
  createImg.classList.add("list__img");
  createLi.append(createImg);
  return createLi;
};

const imgCard = images.map((image) => createImgList(image));
imagesRef.append(...imgCard);
