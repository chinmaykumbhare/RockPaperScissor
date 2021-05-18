function rpsGame(yourChoice) {
    //console.log(yourChoice.id);

    var humanChoice, botChoice;

    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToRpsInt());

    //console.log(document.getElementById("paper").src);

    //console.log("Human Choice: " +humanChoice +" Bot Choice: " +botChoice);

    var results = decideWinner(humanChoice, botChoice);
    //console.log(results);

    var message = finalMessage(results);
    //console.log(message);

    //console.log("Human Choice by ID: " +humanChoice);

    rpsFrontEnd(humanChoice, botChoice, message);
}

function randomToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(humanChoice, botChoice) {
    var rpsDataBase = {
        "rock": {"scissor": 1, "rock": 0.5, "paper":0},
        "paper": {"scissor": 0, "rock": 1, "paper":0.5},
        "scissor": {"scissor": 0.5, "rock": 0, "paper":1},

    }

    var humanScore = rpsDataBase[humanChoice][botChoice];
    var computerScore = rpsDataBase[botChoice][humanChoice];

    return [humanScore, computerScore];
}

function finalMessage([humanScore, computerScore]) {
    if (humanScore === 0) return {"message": "You Lost", "color": "red"};
    else if (humanScore === 0.5) return {"message": "You Tied", "color": "black"};
    else return {"message": "You Won", "color": "green"};
}

function rpsFrontEnd(humanChoice, botChoice, finalMessage) {
    var ImageDatabase = {
        "rock": "https://chinmaykumbhare.github.io/RockPaperScissor/Resources/rock.jpg",
        "paper": "https://chinmaykumbhare.github.io/RockPaperScissor/Resources/paper.jpg",
        "scissor": "https://chinmaykumbhare.github.io/RockPaperScissor/Resources/scissor.jpg",
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

    //human
    if (humanChoice === "rock") {
        const rock = document.createElement("img");
        rock.src = ImageDatabase["rock"];
        document.querySelector(".flex-box-rps").appendChild(rock);
    } else if (humanChoice === "scissor") {
        const scissor = document.createElement("img");
        scissor.src = ImageDatabase["scissor"];
        document.querySelector(".flex-box-rps").appendChild(scissor);
    } else {
        const paper = document.createElement("img");
        paper.src = ImageDatabase["paper"];
        document.querySelector(".flex-box-rps").appendChild(paper);
    }

    //final message
    var finalText = document.createElement("div");
    finalText.innerHTML = "<h1 style='color: " +finalMessage['color'] +"; font-size: 60px; padding: 30px; '>" +finalMessage['message'] +"</h1>";
    document.getElementById("flex-box-rps-div").appendChild(finalText);

    //bot
    if (botChoice === "rock") {
        const rock = document.createElement("img");
        rock.src = ImageDatabase["rock"];
        document.querySelector(".flex-box-rps").appendChild(rock);
    } else if (botChoice === "scissor") {
        const scissor = document.createElement("img");
        scissor.src = ImageDatabase["scissor"];
        document.querySelector(".flex-box-rps").appendChild(scissor);
    } else {
        const paper = document.createElement("img");
        paper.src = ImageDatabase["paper"];
        document.querySelector(".flex-box-rps").appendChild(paper);
    }

}