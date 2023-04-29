<template>
    <div class="snippet-body">
      <div class="quiz-container" id="quiz">
        <div class="quiz-header">
          <h2 id="question">{{ currentQuizData.question }}</h2>
          <ul>
            <li>
              <input type="radio" id="a" name="answer" class="answer" v-model="selectedAnswer" :value="'a'"/>
              <label id="a_text" for="a">{{ currentQuizData.a }}</label>
            </li>
            <li>
              <input type="radio" id="b" name="answer" class="answer" v-model="selectedAnswer" :value="'b'"/>
              <label id="b_text" for="b">{{ currentQuizData.b }}</label>
            </li>
            <li>
              <input type="radio" id="c" name="answer" class="answer" v-model="selectedAnswer" :value="'c'"/>
              <label id="c_text" for="c">{{ currentQuizData.c }}</label>
            </li>
            <li>
              <input type="radio" id="d" name="answer" class="answer" v-model="selectedAnswer" :value="'d'"/>
              <label id="d_text" for="d">{{ currentQuizData.d }}</label>
            </li>
          </ul>
        </div>
        <button @click="submitAnswer" id="submit">Submit</button>
      </div>
    </div>
  </template>

<script setup>
const quizData = [
  {
    question: "Which of the following is NOT a fundamental principle of UX design?",
    a: "Usability",
    b: "Utility",
    c: "Desirability",
    d: "Uniformity",
    correct: "d"
  },
  {
    question: "What is the primary objective of a UX designer?",
    a: "To create visually appealing designs",
    b: "To optimize the user experience",
    c: "To make the interface easy to use",
    d: "To develop the back-end code",
    correct: "b"
  },
  {
    question: "What is the purpose of a wireframe in UX design?",
    a: "To create the final design of the interface",
    b: "To show the visual design elements of the interface",
    c: "To provide a rough outline of the interface",
    d: "To test the interface with real users",
    correct: "c"
  },
  {
    question: "Which of the following is an example of a UX research method?",
    a: "Competitive analysis",
    b: "User interviews",
    c: "A/B testing",
    d: " All of the above",
    correct: "d"
  }
];

let currentQuiz = 0;
let score = 0;
let selectedAnswer = '';

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function submitAnswer() {
  if (selectedAnswer) {
    if (selectedAnswer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
      selectedAnswer = '';
    } else {
      quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button @click="reloadQuiz">Reload</button>
      `;
    }
  }
}

function reloadQuiz() {
  currentQuiz = 0;
  score = 0;
  loadQuiz();
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
}

loadQuiz();
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: #333;
}
.container{
    background-color: #555;
    color: #ddd;
    border-radius: 10px;
    padding: 20px;
    font-family: 'Montserrat', sans-serif;
    max-width: 700px;
}
.container > p{
    font-size: 32px;
}
.question{
    width: 75%;
}
.options{
    position: relative;
    padding-left: 40px;
}
#options label{
    display: block;
    margin-bottom: 15px;
    font-size: 14px;
    cursor: pointer;
}
.options input{
    opacity: 0;
}
.checkmark {
    position: absolute;
    top: -1px;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #555;
    border: 1px solid #ddd;
    border-radius: 50%;
}
.options input:checked ~ .checkmark:after {
    display: block;
}
.options .checkmark:after{
    content: "";
	width: 10px;
    height: 10px;
    display: block;
	background: white;
    position: absolute;
    top: 50%;
	left: 50%;
    border-radius: 50%;
    transform: translate(-50%,-50%) scale(0);
    transition: 300ms ease-in-out 0s;
}
.options input[type="radio"]:checked ~ .checkmark{
    background: #21bf73;
    transition: 300ms ease-in-out 0s;
}
.options input[type="radio"]:checked ~ .checkmark:after{
    transform: translate(-50%,-50%) scale(1);
}
.btn-primary{
    background-color: #555;
    color: #ddd;
    border: 1px solid #ddd;
}
.btn-primary:hover{
    background-color: #21bf73;
    border: 1px solid #21bf73;
}
.btn-success{
    padding: 5px 25px;
    background-color: #21bf73;
}
@media(max-width:576px){
    .question{
        width: 100%;
        word-spacing: 2px;
    } 
}
</style>