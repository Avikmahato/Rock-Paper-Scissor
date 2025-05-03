let arr = ["rock", "paper", "scissor"];
let val = "images/chatbot.png";
let score = 0;
let round = 0;
function chalu() {
  Swal.fire({
    icon: "question",
    title: "Rules",
    text: "You have ten chances to win the game. Every Individual win get increased your score by one. If You have Scored more than the opponent, then you will win the game.",
    timer: 20000,
    timerProgressBar: true,
  });
}
function game(no) {
  let rand = Math.floor(Math.random() * 3);
  let outsocre = document.getElementById("score");
  val = arr[rand];
  round += 1;
  document.getElementById("bot").src = `images/${val}.png`;
  document.getElementById("me").src = `images/${arr[no - 1]}.png`;
  if (round <= 10) {
    if (
      (no === 1 && val == "scissor") ||
      (no === 2 && val == "rock") ||
      (no === 3 && val == "paper")
    ) {
      score += 1;
      outsocre.textContent = `Score : ${score}`;
      document.getElementById("result").src = `images/win.png`;
    } else if (
      (no === 1 && val == "rock") ||
      (no === 2 && val == "paper") ||
      (no === 3 && val == "scissor")
    ) {
      outsocre.textContent = `Score : ${score}`;
      document.getElementById("result").src = `images/draw.png`;
    } else {
      if (score > 0) {
        score -= 1;
      }
      outsocre.textContent = `Score : ${score}`;
      document.getElementById("result").src = `images/lose.png`;
    }
  } else {
    if (score > 5) {
      Swal.fire({
        icon: "success",
        title: "Congrats!",
        text: "You Won The Game.",
        footer: '<a href="index.html">Do you want to play again?</a>',
      });
    } else if (score === 5) {
      Swal.fire({
        icon: "question",
        title: "Game Draw!!!",
        text: "The Game is Draw.",
        footer: '<a href="index.html">Do you want to play again?</a>',
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Lose!!!!!",
        text: "You Lose The Game.",
        footer: '<a href="index.html">Do you want to play again?</a>',
      });
    }
  }
}
