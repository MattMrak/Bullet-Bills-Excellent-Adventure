const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");
let jumping = 0;
let counter = 0;

document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/games")
    .then(r => r.json())
    .then((object) => {
        let character = document.getElementById("character")
        let characterImage = document.createElement("img")
        characterImage.width = 20
        characterImage.height = 20
        characterImage.src = object[0].image
        character.append(characterImage)
        let block = document.getElementById("block")
        let blockImage = document.createElement("img")
        blockImage.width = 50
        blockImage.height = 500
        blockImage.src = object[1].image
        block.append(blockImage)
    })
})

hole.addEventListener('animationiteration', () => {
    const random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
    counter++;
});

setInterval(function() {
    const characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping === 0) {
        character.style.top = (characterTop + 3)+"px";
    }
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    const holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    const cTop = -(500 - characterTop);
    if ((characterTop > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
        character.style.top = 100 + "px";
        new Scores
    }
},10);

function jump() {
    let jumping = 1;
    let jumpCount = 0;
    const jumpInterval = setInterval(function(){
        const characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop > 6) && (counter < 100000)) {
            character.style.top = (characterTop - 5) + "px";
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 8;
            jumpCount = 0;
        }
        jumpCount++;
    },10);
}