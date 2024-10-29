//Medium Challenges
const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

console.log(textBox, outputBox, statusBox);

let score = 0;
let specialTownGuessed = false; // Step 6: Add boolean variable for special town

const checkAnswer = () => {
  const answer = textBox.value.trim().toLowerCase();

  const boroughs = {
    "manhattan": "<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>",
    "brooklyn": "<h3>Brooklyn</h3><p>The most populous Borough, with nearly 3 million residents!</p>",
    "bronx": "<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>",
    "queens": "<h3>Queens</h3><p>The largest Borough, at 109 square miles.</p>",
    "staten island": "<h3>Staten Island</h3><p>The roomiest Borough, with the fewest people per square mile.</p>",
    "halloween town": "<h3>Halloween Town</h3><p>A spooky place that only appears in October!</p>" // Step 5: Special town
  };

  if (boroughs[answer]) {
    if (answer === "halloween town") {
      // Step 6: If special town guessed, set boolean to true and display message
      specialTownGuessed = true;
      outputBox.innerHTML += boroughs[answer];
      statusBox.textContent = "You've found Halloween Town!";
    } else {
      outputBox.innerHTML += boroughs[answer];
      score++;
      statusBox.textContent = "Correct! Keep going!";
    }

    // Step 4: Check score after each correct answer
    checkScore();
  } else {
    statusBox.textContent = "Not quite, try again!";
  }

  textBox.value = ""; // Reset the textBox
};

const checkScore = () => {
  // Step 4: Update statusBox message if score is 5
  if (score === 5) {
    if (specialTownGuessed) {
      statusBox.textContent = "Congratulations, you found all five boroughs and discovered the secret Halloween Town!";
    } else {
      statusBox.textContent = "Congratulations, you found all five boroughs!";
    }

    // Disable the input field
    textBox.disabled = true;
  }
};

textBox.addEventListener("change", checkAnswer);
