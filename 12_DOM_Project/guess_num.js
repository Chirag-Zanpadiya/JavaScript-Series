// first of all generate the random number

let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

// console.log(randomNumber);

//select the user input
let userInput = document.querySelector("#guessField");

//select the submit btn
let submit = document.querySelector("#subt");

// select the user guess and store in the arr
let guessSlot = document.querySelector(".guesses");
// select the ramaining guess
let remaining = document.querySelector(".lastResult");

//select the loworhi to displat the high or low value of the userinput
let lowOrHi = document.querySelector(".lowOrHi");

let p = document.createElement("p");

let startOver = document.querySelector(".resultParas");

let playGame = true;
let prevGuess = [];
let numGuess = 1;

if (playGame) {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    let guess = userInput.value;
    console.log(guess);
    validateGuess(guess);
  });
}

// check the enter  guess is valid or not :: exp :: 'a' this is not valid input
function validateGuess(guess) {
  console.log(`validateGuess is called`);

  if (isNaN(guess)) {
    alert(`Please Enter the Valid Number`);
  } else if (guess < 1) {
    alert(`Please Enter Number Greather than the 1`);
  } else if (guess > 100) {
    alert(`Please Enter Number less than the 100`);
  } else {
    // valid number hait to direct push kardo arr me
    console.log(`push in the arr`);

    prevGuess.push(guess);
    console.log(` after push arr is  : ${prevGuess}`);

    if (numGuess === 11) {
      //displatGuess kardo
      console.log(`count reaches to 11`);
      console.log(`displayGuess called`);

      displayGuess(guess);
      console.log(`displaymsg called`);
      displayMessage(`Game Over ! Your randomnumber is  ${guess}`);
      console.log(`endgame called`);
      endGame();
    } else {
      console.log(`displayGuess callled`);

      displayGuess(guess);
      console.log(`checkguess callled`);
      checkGuess(guess);
    }
  }
}

// check the guess is grether than the target or less than the target and displat the msg
function checkGuess(guess) {
  if (guess == randomNumber) {
    console.log(`random number is equal `);

    displayMessage(
      `It's Great You Won the Game No of Attemt is  ${numGuess - 1}`
    );
    console.log(`end the game`);

    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Your Number is TOOO HIGH`);
  } else if (guess < randomNumber) {
    displayMessage(`Your Number is TOOO LOW`);
  }
}

//Guesss ko add karta ja raha hai ::  previous Guess:: me
function displayGuess(guess) {
  console.log(`inside the displatGuess`);

  userInput.value = "";
  // console.log(userInput.value);
  // yaha se ham previoes guess me show karte hai ki previous input of the user
  guessSlot.innerHTML += `${guess}, `;
  console.log(`guessSlot is  : ${guessSlot.innerHTML} `);

  numGuess++;
  console.log(`numGuess  : ${numGuess}`);

  remaining.innerHTML = `${11 - numGuess}`;
  console.log(`Remaining : ${remaining}`);
}

// simply displat the message
function displayMessage(message) {
  lowOrHi.innerHTML = ` <h2> ${message} </h2>`;
}

// end the game
function endGame() {
  // console.log("you Won the game");

  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(`New Random number is ${randomNumber}`);

    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
