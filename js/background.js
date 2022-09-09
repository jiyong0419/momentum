"use strict";
const images = ["bg1.jpg", "bg2.avif", "bg3.png", "bg4.webp", "bg5.jpg"];
const randomImages = images[Math.floor(Math.random() * images.length)];
const imageTag = document.createElement("img");
imageTag.setAttribute("src", `img/${randomImages}`);
document.body.appendChild(imageTag);
