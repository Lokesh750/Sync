const quizData = [

  {

    question: 'What is the capital city of France?',

    choices: ['Paris', 'London', 'Rome', 'Madrid'],

    correctAnswer: 'Paris'

  },

  {

    question: 'What is the largest planet in our solar system?',

    choices: ['Mars', 'Venus', 'Jupiter', 'Saturn'],

    correctAnswer: 'Jupiter'

  },

  {

    question: 'What is the chemical symbol for gold?',

    choices: ['Ag', 'Au', 'Cu', 'Fe'],

    correctAnswer: 'Au'

  }

];

let currentQuestion = 0;

let score = 0;

const questionElement = document.getElementById('question');

const choicesElement = document.getElementById('choices');

const submitButton = document.getElementById('submit');

const scoreElement = document.getElementById('score');

function showQuestion() {

  const quizItem = quizData[currentQuestion];

  questionElement.textContent = quizItem.question;

  choicesElement.innerHTML = '';

  for (let i = 0; i < quizItem.choices.length; i++) {

    const choice = document.createElement('div');

    choice.classList.add('choice');

    choice.textContent = quizItem.choices[i];

    choice.addEventListener('click', checkAnswer);

    choicesElement.appendChild(choice);

  }

}

function checkAnswer(event) {

  const selectedChoice = event.target;

  const answer = selectedChoice.textContent;

  const quizItem = quizData[currentQuestion];

  if (answer === quizItem.correctAnswer) {

    score++;

  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {

    showQuestion();

  } else {

    showScore();

  }

}

function showScore() {

  questionElement.style.display = 'none';

  choicesElement.style.display = 'none';

  submitButton.style.display = 'none';

  scoreElement.style.display = 'block';

  scoreElement.textContent = `Your score: ${score}/${quizData.length}`;

  // You can add code here to display winning/losing gifs based on the score threshold

}

showQuestion();
