// Set the initial scores for the user and computer
let userScore = 0;
let compScore = 0;

// Select all the choice elements (rock, paper, scissors buttons)
const choices = document.querySelectorAll(".choice");

// Select the message display area
const msg = document.querySelector("#msg");

// Select the score display elements
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to get a random choice for the computer
const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3); // Random index between 0 and 2
    return options[randIndex];
};

// Function to handle a draw
const drawGame = () => {
    console.log("Game is a draw");
    msg.innerText = "Game is a draw. Try again!";
    msg.style.backgroundColor = "#081b31"; // Default blue background
};

// Function to show the winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++; // Increase user score
        userScorePara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++; // Increase computer score
        compScorePara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Function to play the game
const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);

    // Get the computer's choice
    const compChoice = getCompChoice();
    console.log("Computer Choice =", compChoice);

    // If both choices are same, it's a draw
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false;

        // Determine the winner
        if (userChoice === "rock") {
            userWin = compChoice === "scissors"; // Rock beats scissors
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock"; // Paper beats rock
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper"; // Scissors beats paper
        }

        // Show the result
        showWinner(userWin, userChoice, compChoice);
    }
};

// Add event listeners to each choice button
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Get user's choice from ID
        console.log("Choice was clicked:", userChoice);
        playGame(userChoice); // Start the game
    });
});
