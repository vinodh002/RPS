const mess = document.querySelector(".game-message");
const compScoreEl = document.getElementById("comp-score");
const userScoreEl = document.getElementById("user-score");
const highScoreEl = document.getElementById("high-score");
const compImg = document.querySelector(".comp-img");
const userImg = document.querySelector(".user-img");
const playAgainBtn = document.querySelector(".again");
const buttons = document.querySelectorAll(".btn");

let scores = [0, 0];
let highScore = 0;
let gameOn = true;

// Function to check game status
const checkGameStatus = () => {
  if (scores[0] === 10) {
    showAndHideMsg("Computer Wins! 🎉", "red");
    gameOn = false;
  } else if (scores[1] === 10) {
    showAndHideMsg("User Wins! 🥳", "green");
    gameOn = false;
    highScore = Math.max(highScore, scores[1]);
    highScoreEl.textContent = highScore;
  }
};

// Function to display a message
const showAndHideMsg = (txt, color) => {
  mess.textContent = txt;
  mess.style.color = color;
  setTimeout(() => {
    mess.textContent = "Let's Play!";
    mess.style.color = "yellow";
  }, 2000);
};

// Handle button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (gameOn) {
      const userChoice = button.textContent;
      const compChoiceNum = Math.floor(Math.random() * 3) + 1;
      const compChoice = ["rock", "paper", "scissor"][compChoiceNum - 1];

      userImg.src = `./img/${userChoice}.png`;
      compImg.src = `./img/${compChoice}.png`;

      if (userChoice === compChoice) {
        showAndHideMsg("It's a Tie!", "orange");
      } else if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
      ) {
        scores[1]++;
        userScoreEl.textContent = scores[1];
        showAndHideMsg("User Scores! 🥳", "green");
      } else {
        scores[0]++;
        compScoreEl.textContent = scores[0];
        showAndHideMsg("Computer Scores! 😢", "red");
      }

      checkGameStatus();
    }
  });
});

// Handle Play Again
playAgainBtn.addEventListener("click", () => {
  scores = [0, 0];
  userScoreEl.textContent = 0;
  compScoreEl.textContent = 0;
  gameOn = true;
  mess.textContent = "Let's Play!";
  userImg.src = "./img/rock.png";
  compImg.src = "./img/scissor.png";
});
