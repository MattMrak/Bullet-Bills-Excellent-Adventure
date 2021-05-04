class Scores {
  
    constructor() {

        document.getElementById("game").innerHTML = ""

        let scoreBoard = document.createElement("div")
        scoreBoard.className = "scores"
        scoreBoard.innerHTML = `<h2>Score Board</h2>`

        let score = document.getElementById("newScoreContainer")
        score.style.display="block"

        game.append(score)

        let form = document.getElementById("newScoreForm");

        form.addEventListener("submit", (event) => {
            event.preventDefault()
            let player = event.target.name.value
            fetch("http://localhost:3000/scores", {
                method: 'POST',
                headers:  {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                name: player,
                amount: `${counter}`,
                game_id: 1
            })
            })
            .then(response => response.json())
            .then((newScore) => {
                let newlyCreated = document.createElement("ol")
                newlyCreated.innerHTML = `<br><h3>Your Score</h3> Name: ${newScore.name} | Score: ${newScore.amount}`
                scoreBoard.append(newlyCreated)
                event.target.reset()
            })
            fetchScores()
        })

        function fetchScores() {
            game.append(scoreBoard)
            fetch("http://localhost:3000/scores")
            .then(response => response.json())
            .then((scoreArray) => {
                scoreArray.forEach((score) => {
                    takeOneScoreAndTurnItIntoOl(score)
                })
            })
            function takeOneScoreAndTurnItIntoOl(scoreObj) {
                let scoreOl = document.createElement("ol")
                scoreOl.className = "item"
                scoreOl.innerHTML = `Name: ${scoreObj.name} | Score: ${scoreObj.amount}`
                scoreBoard.append(scoreOl)
            }
            let startGame = document.getElementById("startGame")
            game.append(startGame)
            startGame.onclick = function() {
                restart()
            }
            function restart() {
                document.location.href=""
            }
        };

    }

}
