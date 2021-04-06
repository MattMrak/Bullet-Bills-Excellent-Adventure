const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");
let jumping = 0;
let counter = 0;

hole.addEventListener('animationiteration', () => {
    const random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
    counter++;
});