<template>
  <div class="container">
    <div class="quiz-container" id="quiz">
      <div class="quiz-header">
        <h2 id="question">Question text</h2>
        <ul>
          <li>
            <input type="radio" id="a" name="answer" class="answer" />
            <label id="a_text" for="a">Question</label>
          </li>
          <li>
            <input type="radio" id="b" name="answer" class="answer" />
            <label id="b_text" for="b">Question</label>
          </li>
          <li>
            <input type="radio" id="c" name="answer" class="answer" />
            <label id="c_text" for="c">Question</label>
          </li>
          <li>
            <input type="radio" id="d" name="answer" class="answer" />
            <label id="d_text" for="d">Question</label>
          </li>
        </ul>
      </div>
      <button id="submit">Submit</button>
    </div>
  </div>
</template>

<script setup>
const quizData = [
{
question: "Which player has won the most IPL trophies?",
a: "M S Dhoni",
b: "Rohit Sharma",
c: "K L Rahul",
d: "Jasprit Bumrah",
correct: "b" },

{
question: "Which player has hit the most fours in IPL?",
a: "Suresh Raina",
b: "Shikhar Dhawan",
c: "Virat Kohli",
d: "Rohit Sharma",
correct: "b" },

{
question: "Where was the final of the inaugural IPL season held?",
a: "D Y Patil Stadium",
b: "Eden Gardens",
c: "Wankhede Stadium",
d: "Brabourne CCI",
correct: "a" },

{
question: "Which player bagged the 'Emerging Player of the Tournament' award in IPL 2008?",
a: "Rohit Sharma",
b: "Shreevats Goswami",
c: "Suresh Raina",
d: "Virat Kohli",
correct: "b" }];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
deselectAnswers();

const currentQuizData = quizData[currentQuiz];

questionEl.innerText = currentQuizData.question;
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;
}

function getSelected() {
let answer = undefined;
answerEls.forEach(answerEl => {
if (answerEl.checked) {
answer = answerEl.id;
}
});
return answer;
}

function deselectAnswers() {
answerEls.forEach(answerEl => {
answerEl.checked = false;
});
}

submitBtn.addEventListener("click", () => {
const answer = getSelected();
if (answer) {
if (answer === quizData[currentQuiz].correct) {
score++;
}
currentQuiz++;
if (currentQuiz < quizData.length) { loadQuiz(); } else { quiz.innerHTML=` <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
    <button onclick="#">Reload</button>
    `;
    }
    }
    });
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