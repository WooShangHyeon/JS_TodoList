const images = ["0.jpg", "1.jpg", "2.jpg"];

const choosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;
bgImage.classList.add("bgImage");
document.body.appendChild(bgImage);