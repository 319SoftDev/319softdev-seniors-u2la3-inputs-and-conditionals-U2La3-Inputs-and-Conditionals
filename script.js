//Mild Challenges
const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

console.log(textBox, outputBox, statusBox);

let score = 0;

const checkAnswer = () => {
  const answer = textBox.value.trim().toLowerCase();

  const boroughs = {
    "manhattan": "<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>",
    "brooklyn": "<h3>Brooklyn</h3><p>The most populous Borough, with nearly 3 million residents!</p>",
    "bronx": "<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>",
    "queens": "<h3>Queens</h3><p>The largest Borough, at 109 square miles.</p>",
    "staten island": "<h3>Staten Island</h3><p>The roomiest Borough, with the fewest people per square mile.</p>"
  };

  if (boroughs[answer]) {
    outputBox.innerHTML += boroughs[answer];
    score++;

    if (score === 5) {
      statusBox.textContent = "Congratulations! You've named all five boroughs!";
    } else {
      statusBox.textContent = "Correct! Keep going!";
    }
  } else {
    statusBox.textContent = "Not quite, try again!";
  }

  textBox.value = "";
};

textBox.addEventListener("change", checkAnswer);
