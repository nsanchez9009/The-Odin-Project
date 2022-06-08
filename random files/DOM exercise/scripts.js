const body = document.querySelector("body");
const red = document.createElement("p");
const blue = document.createElement("h3");
const container = document.createElement("div");
const conth = document.createElement("div");
const contp = document.createElement("p");

red.style.cssText = "color: red;";
blue.style.cssText = "color: blue;";
container.style.cssText = "border: 2px solid black; background-color: pink;";

red.textContent = "Hey I'm red!";
blue.textContent = "I'm a blue h3!";
conth.textContent = "I'm a div";
contp.textContent = "ME TOO!";

body.appendChild(red);
body.appendChild(blue);

container.appendChild(conth);
container.appendChild(contp);

body.appendChild(container);

