// Select html tags using DOM
var input = document.getElementById("inputNum")
var checkBtn = document.getElementById("checkBtn")
var tryAgainBtn = document.getElementById("againBtn")
var scorePoints = document.getElementById("score")
var gameResult = document.getElementById("result")

// Create random number
var randomNum = Math.random() * 9
var myNum = Math.floor(randomNum)

// To reload page


// To check result
checkBtn.addEventListener("click", function checkNum() {
    if (input.value == "") {
        alert("Enter any number");
    } else if (myNum == input.value) {
        gameResult.innerText = "Congratulations! You win";
        scorePoints + 1;
        input.value = "";
    } else {
        gameResult.innerText = "Better luck, Next time";
        input.value = "";
        scorePoints - 1;
    };
});

tryAgainBtn.addEventListener("click", function resetGame() {
    input.value = "";
});

