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

      //Computer selection
      computerPlayer();
      computerSelection = computerPlayer();
 
      if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("Tie! Try again.");

      } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats rock");
        computerScore++;

      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats scissors");
        playerScore++;

      } if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("Tie! Try again.");

      } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats rock");
        playerScore++;

      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beats paper");
        computerScore++;

      } if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("Tie! Try again.");

      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats paper");
        playerScore++;

      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats paper");
        computerScore++;
        
      }

      if (playerScore === 5) {
        paper.textContent = "You Win!";
        paper.classList.add('game-over');
        paper.classList.remove('rpsHeader');
        rock.classList.add('hide');
        scissors.classList.add('hide');
        scoreKeeper.classList.add('hide');
      } else if (computerScore === 5) {
        paper.textContent = "You Lose!";
        paper.classList.add('game-over');
        rock.classList.add('hide');
        scissors.classList.add('hide');
        scoreKeeper.classList.add('hide');
      }
    }

    // Function to start the game
    function game() {
      for (i = 0; i < 5; i++) {
        console.log(playRound());
      }

    }

    // Window load sequence
    // Mouse hovering over headers
    let rpsHeaders = document.querySelectorAll(".rpsHeader");
    window.addEventListener('load', function(e) {
      rpsHeaders.forEach((header) => {
        header.classList.add('header-entrance');
        header.addEventListener('mouseout', function(e) {
          header.classList.remove('header-hover');
        })
        header.addEventListener('mouseover', function(e) {
          if (playerScore < 5 && computerScore < 5) {
            header.classList.add('header-hover');
          }
        })
      })
    })

    let scoreKeeper = document.querySelector("#scoreKeeper");

        // Rock is selected
        let rock = document.querySelector('#rock');
        rock.addEventListener('click', function() {
          playRound("rock", computerSelection);
          scoreKeeper.textContent = "Player   " + playerScore + " - " + computerScore + "   Computer";
  })
  
      // Paper is selected
        let paper = document.querySelector('#paper');
        paper.addEventListener('click', function() {
          if (playerScore < 5 && computerScore < 5) {
            playRound("paper", computerSelection);
            scoreKeeper.textContent = "Player   " + playerScore + " - " + computerScore + "   Computer";
          }
  })
  
      // Scissors is selected
        let scissors = document.querySelector('#scissors');
        scissors.addEventListener('click', function() {
          playRound("scissors", computerSelection);
          scoreKeeper.textContent = "Player   " + playerScore + " - " + computerScore + "   Computer";
  })

