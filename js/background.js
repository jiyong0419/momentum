"use strict";
const images = ["bg_image_1.jpg", "bg_image_2.avif", "bg_image_3.jpg", "bg_image_4.webp", "bg_image_5.png"];
const randomImages = images[Math.floor(Math.random() * images.length)];
const imageTag = document.createElement("img");
imageTag.src = `./img/${randomImages}`;
document.body.appendChild(imageTag);
