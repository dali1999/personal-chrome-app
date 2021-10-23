const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImg = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;
document.body.appendChild(bgImg);
