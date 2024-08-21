const playGame = () => {
  const getComputerChoice = (choices) => {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const getHumanChoice = (choices) => {
    while (true) {
      let choice = prompt("Your choice?").toLowerCase();
      if (choices.includes(choice)) return choice;
      else console.log("Invalid choice, Enter again");
    }
  };

  const playRound = (choices) => {
    let humanChoice = getHumanChoice(choices);
    let computerChoice = getComputerChoice(choices);

    console.log(
      `Your Choice: ${humanChoice}, Computer Choice: ${computerChoice}`
    );

    if (humanChoice === computerChoice) console.log("Tie");
    else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "scissor" && computerChoice === "rock") ||
      (humanChoice === "paper" && computerChoice === "scissor")
    ) {
      return "computer";
    } else if (
      (computerChoice === "rock" && humanChoice === "paper") ||
      (computerChoice === "scissor" && humanChoice === "rock") ||
      (computerChoice === "paper" && humanChoice === "scissor")
    ) {
      return "human";
    }
  };

  const CHOICES = ["rock", "paper", "scissor"];
  let humanScore = 0;
  let computerScore = 0;

  while (humanScore < 5 && computerScore < 5) {
    let whoWon = playRound(CHOICES);
    if (whoWon === "human") {
      console.log("You won this round");
      humanScore += 1;
    } else if (whoWon === "computer") {
      console.log("You lost this round");
      computerScore += 1;
    }

    console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`);
  }
  humanScore === 5
    ? console.log("You won the game!")
    : console.log("You lost the game");
};

playGame();
