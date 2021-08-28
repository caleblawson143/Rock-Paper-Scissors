    let computerSelection;
    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;

    function computerPlayer() {
    let options = ["rock","paper","scissors"];
        computerSelection = options[Math.floor(Math.random() * options.length)];

        return computerSelection;
    }

    function playRound(playerSelection, computerSelection) {

      //Player Selection
      playerSelection = prompt("Please choose between Rock, Paper, or Scissors");
      playerSelection = playerSelection.toLowerCase();

      //Computer selection
      computerPlayer();
      computerSelection = computerPlayer();

      console.log("The computer selected " + computerSelection + ", and the player selected " + playerSelection);


      if (playerSelection === "rock" && computerSelection === "rock") {
        return("Tie! Try again.");

      } else if (playerSelection === "rock" && computerSelection === "paper") {
        return("You lose! Paper beats rock");
        computerScore++;

      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return("You win! Rock beats scissors")
        playerScore++;

      } if (playerSelection === "paper" && computerSelection === "paper") {
        return("Tie! Try again.");

      } else if (playerSelection === "paper" && computerSelection === "rock") {
        return("You win! Paper beats rock")
        playerScore++;

      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return("You lose! Scissors beats paper")
        computerScore++;

      } if (playerSelection === "scissors" && computerSelection === "scissors") {
        return("Tie! Try again.");

      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return("You win! Scissors beats paper")
        playerScore++;

      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return("You lose! Rock beats paper")
        computerScore++;
        
      } else {
        return("Please select a valid option");
      }
    }

    // Function to start the game
    function Game() {
      rounds = parseInt(prompt("How many rounds would you like to play?"))

      for (i = 0; i < rounds; i++) {
        console.log(playRound(playerSelection, computerSelection));
      }

    }

    // Window load sequence
    let rpsHeaders = document.querySelectorAll(".rpsHeader");
    window.addEventListener('load', function(e) {
      rpsHeaders.forEach((header) => {
        header.classList.add('header-entrance');
        header.addEventListener('mouseout', function(e) {
          header.classList.remove('header-hover');
        })
        header.addEventListener('mouseover', function(e) {
          header.classList.add('header-hover');
        })
      })
    })