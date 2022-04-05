const mess = document.querySelector(".g-m");
const cs = document.querySelector(".comp .score");
const us = document.querySelector(".user .score");
// console.log(cs);

let scores = [0, 0];
let gameOn = true;

setTimeout(function () {
  mess.style.display = "none";
}, 2000);

let msg;
const gameStatus = function () {
  if (scores[0] == 10) {
    msg = "Computer wins!";
    gameOn = false;
  } else if (scores[1] == 10) {
    msg = "User wins!";
    gameOn = false;
  }
};

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (gameOn) {
      gameStatus();
      const rNum = Math.trunc(Math.random() * 3) + 1;
      let src;
      switch (rNum) {
        case 1:
          src = "rock";
          break;
        case 2:
          src = "paper";
          break;
        case 3:
          src = "scissor";
          break;
      }

      document.querySelector(".comp img").src = `img/${src}.png`;
      document.querySelector(".user img").src = `img/${this.textContent}.png`;

      console.log(src, this.textContent);
      if (src == this.textContent) {
        console.log("Tie");
        showAndHideMsg("Tie");
        return;
      } else if (src == "rock") {
        if (this.textContent == "paper") {
          console.log("User wins");
          scores[1]++;
          us.textContent = scores[1];
          showAndHideMsg("User wins");
        } else {
          console.log("Computer wins");
          scores[0]++;
          cs.textContent = scores[0];
          showAndHideMsg("Computer wins");
          // cs.textContent = "score";
        }
      } else if (src == "paper") {
        if (this.textContent == "rock") {
          console.log("Computer wins");
          scores[0]++;
          cs.textContent = scores[0];
          showAndHideMsg("Computer wins");
        } else {
          console.log("User wins");
          showAndHideMsg("User wins");
          scores[1]++;
          us.textContent = scores[1];
        }
      } else {
        if (this.textContent == "rock") {
          console.log("User wins");
          scores[1]++;
          us.textContent = scores[1];
          showAndHideMsg("User wins");
        } else {
          console.log("Computer wins");
          scores[0]++;
          cs.textContent = scores[0];
          showAndHideMsg("Computer wins");
        }
      }
    }
  });
});

const showAndHideMsg = (txt) => {
  mess.style.display = "block";
  mess.textContent = txt;
  setTimeout(function () {
    mess.style.display = "none";
  }, 2000);
};
