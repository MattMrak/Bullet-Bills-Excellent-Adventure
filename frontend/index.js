const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");
let jumping = 0;
let counter = 0;


document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/games")
    .then(r => r.json())
    .then((object) => {
        console.log(object)
        // 1. select the character div 
        // 2. set the character div to equal the image that you want
        // 3. select the pipes div
        //4. set the pipes div to the image you want
        let character = document.getElementById("character")
        let characterImage = document.createElement("img")
        characterImage.src = object[0].image
        character.append(characterImage)
        let block = document.getElementById("block")
        let blockImage = document.createElement("img")
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
        // alert("Game Over! Score: " + counter);
        character.style.top = 100 + "px";
        counter = 0;
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







// function fetchScores() {
//     return fetch(SCORES_URL)
//     .then(response => response.json())
// };
// document.addEventListener('DOMContentLoaded', () => {
//     fetchScores()
//     .then(results => console.log(results))
// });
// function addANewScore(event) {
//     const scoreId = event.target.dataset.scoreId;
//     data = { score_id: scoreId}

//     fetch(SCORES_URL, {
//         method: 'POST',
//         headers:  {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//         },
//         body: JSON.stringify(data)
//     })
// };