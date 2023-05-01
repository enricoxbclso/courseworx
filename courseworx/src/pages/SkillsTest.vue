<template>
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
</template>

<script setup>


const quizData = [
{
question: "Which of the following is NOT a fundamental principle of UX design?",
a: "Usability",
b: "Utility",
c: "Desirability",
d: "Uniformity",
correct: "d" },

{
question: "What is the primary objective of a UX designer?",
a: "To create visually appealing designs",
b: "To optimize the user experience",
c: "To make the interface easy to use",
d: "To develop the back-end code",
correct: "b" },

{
question: "What is the purpose of a wireframe in UX design?",
a: "To create the final design of the interface",
b: "To show the visual design elements of the interface",
c: "To provide a rough outline of the interface",
d: "To test the interface with real users",
correct: "c" },

{
question: "Which of the following is an example of a UX research method?",
a: "Competitive analysis",
b: "User interviews",
c: "A/B testing",
d: " All of the above",
correct: "d" },

{
question: "Which of the following is NOT a stage in the UX design process?",
a: "Ideation",
b: "Research",
c: "Testing",
d: "Deployment",
correct: "d" },

{
question: "What is a persona in UX design?",
a: "A fictional representation of a user",
b: "A type of user interface element",
c: "A design element used for branding",
d: "A programming language used for UX design",
correct: "a" },

{
question: "What is a persona in UX design?",
a: "A fictional representation of a user",
b: "A type of user interface element",
c: "A design element used for branding",
d: "A programming language used for UX design",
correct: "a" },

{
question: "What is a persona in UX design?",
a: "A fictional representation of a user",
b: "A type of user interface element",
c: "A design element used for branding",
d: "A programming language used for UX design",
correct: "a" },

{
question: "What is a persona in UX design?",
a: "A fictional representation of a user",
b: "A type of user interface element",
c: "A design element used for branding",
d: "A programming language used for UX design",
correct: "a" },
];

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
</script>

<style scoped>

</style>