class Images {

    constructor() {

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

    }
    
}