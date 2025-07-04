function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors:");
}

let humanScore = 0;
let computerScore = 0;
let round = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
}

function endGame() {
  document.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    let output = document.getElementById("output");

    const humanSelection = button.id;
    const computerSelection = getComputerChoice();

    output.appendChild(document.createElement("p"));
    output.lastChild.textContent = `Round ${++round}: You chose ${humanSelection}, Computer chose ${computerSelection}.`;

    output.appendChild(document.createElement("p"));
    output.lastChild.textContent = playRound(humanSelection, computerSelection);

    output.appendChild(document.createElement("p"));
    output.lastChild.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;

    output.appendChild(document.createElement("p"));
    if (humanScore === 5) {
      output.lastChild.textContent = "Congratulations! You win the game!";
      endGame();
    } else if (computerScore === 5) {
      output.lastChild.textContent = "Sorry! You lose the game.";
      endGame();
    }
  });
});
