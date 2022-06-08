//Method 2
//This method is a little better. The js has been moved to a js file but we still have the problem that a DOM element can only have 1 onclick property.
const btn = document.querySelector("#btn");
//btn.onclick = () => alert("Hello World");

//Method 3
//This is more complex but it allows multiple event listeners. This is much more flexible and powerful.
const btn2 = document.querySelector("#btn2");
//btn2.addEventListener("click", () => alert("Hello World"));

//Now i'll write this with a named func to clean up my code. I will note out anything I don't need.

function alertFunc(){
    alert("Hello World");
}

btn.onclick = alertFunc;
btn2.addEventListener("click", alertFunc);

//More stuff
btn2.addEventListener("click", (e) => console.log(e.target));
btn2.addEventListener("click", (e) => e.target.style.background = "blue");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", () => alert(button.id)));


