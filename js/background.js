"use strict";
const images = ["Christ_the_Redeemer.jpg", "Colosseum.avif", "Eiffel_Tower.jpg", "newyork.webp", "Taj_Mahal.png"];
const randomImages = images[Math.floor(Math.random() * images.length)];
const imageTag = document.createElement("img");
imageTag.setAttribute("src", `img/${randomImages}`);
document.body.appendChild(imageTag);
