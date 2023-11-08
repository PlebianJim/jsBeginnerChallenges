//<----- Challenge 1 (3 and 5) button ----->

// Variables
const threeAndFive = document.getElementById(
  "completed-challenge-container-button"
);
const resultParagraph = document.querySelector(
  ".completed-challenge-container p"
);
const resetButton = document.getElementById("completed-challenge-reset-button");

let originalContent = resultParagraph.textContent;

// Event listener for button click

threeAndFive.addEventListener("click", function () {
  const challOneUserInput = parseInt(prompt("Please enter a number: "));
  const result = calculateMultiplesAndSum(challOneUserInput);
  updateResultParagraph(challOneUserInput, result);
});

// Event listener to reset button click

resetButton.addEventListener("click", function () {
  resultParagraph.textContent = originalContent;
});

// Function to check the entered value

function calculateMultiplesAndSum(number) {
  let multiples = [];
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
      sum += i;
    }
  }
  return { multiples, sum };
}

// Function to update the DOM by inserting calculated information into a selected node

function updateResultParagraph(userInput, result) {
  const resultText = `The natural numbers below ${userInput} that are multiples of 3 or 5 are ${result.multiples.join(
    ", "
  )}. The sum of these numbers is ${result.sum}.`;
  resultParagraph.textContent = resultText;
}

//<----- Challenge 2 (Even or Odd) button ----->
// Variables
// Select the button element
const button = document.getElementById("c2-button-prompt");
// Select the paragraph element
const para = document.querySelector(
  ".completed-challenge-container-chall-two p"
);

// Event listener for button click
button.addEventListener("click", function () {
  // Get user input with prompt
  const userNum = prompt("Enter a Number: ");
  // Check if number is even or odd
  let result;
  if (userNum % 2 === 0) {
    result = "even";
  } else {
    result = "odd";
  }
  // Update paragraph with result text
  para.textContent = `You entered ${userNum} which is ${result}`;
});
