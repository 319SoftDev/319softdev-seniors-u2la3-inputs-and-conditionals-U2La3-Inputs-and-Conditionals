//Spicy Challenges
const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

let score = 0;
let specialTownGuessed = false;
let guessedBoroughs = []; // Step 8: Array to track guessed boroughs

const checkAnswer = () => {
  // Standardize user input
  const answer = textBox.value.trim().toLowerCase();

  const boroughs = {
    "manhattan": "<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>",
    "brooklyn": "<h3>Brooklyn</h3><p>The most populous Borough, with nearly 3 million residents!</p>",
    "bronx": "<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>",
    "queens": "<h3>Queens</h3><p>The largest Borough, at 109 square miles.</p>",
    "staten island": "<h3>Staten Island</h3><p>The roomiest Borough, with the fewest people per square mile.</p>",
    "halloween town": "<h3>Halloween Town</h3><p>A spooky place that only appears in October!</p>" // Special town
  };

  // Check if input matches a valid borough
  if (boroughs[answer]) {
    if (guessedBoroughs.includes(answer)) {
      // Step 8: Alert user if they've already guessed this borough
      statusBox.textContent = "You've already guessed this borough. Try another!";
    } else {
      // If borough is not guessed yet, add to guessedBoroughs
      guessedBoroughs.push(answer);

      if (answer === "halloween town") {
        // Handle special town
        specialTownGuessed = true;
        outputBox.innerHTML += boroughs[answer];
        statusBox.textContent = "You've found Halloween Town!";
      } else {
        // Handle regular boroughs
        outputBox.innerHTML += boroughs[answer];
        score++;
        statusBox.textContent = "Correct! Keep going!";
      }

      // Check score after each correct answer
      checkScore();
    }
  } else {
    statusBox.textContent = "Not quite, try again!";
  }

  textBox.value = ""; // Reset the textBox
};

const checkScore = () => {
  if (score === 5) {
    if (specialTownGuessed) {
      statusBox.textContent = "Congratulations, you found all five boroughs and discovered the secret Halloween Town!";
    } else {
      statusBox.textContent = "Congratulations, you found all five boroughs!";
    }
    textBox.disabled = true; // Disable the input field
  }
};

textBox.addEventListener("change", checkAnswer);
