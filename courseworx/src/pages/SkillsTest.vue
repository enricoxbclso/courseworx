<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Quiz</title>
  </head>
  <body>
    <div class="quiz-container" id="quiz">
      <h2 id="category"></h2>
      <div class="quiz-header">
        <h3 id="question">Question text</h3>
        <ul>
          <li>
            <input type="radio" id="a" name="answer" class="answer" />
            <label for="option1" id="a_text">Question</label>
          </li>
          <li>
            <input type="radio" id="b" name="answer" class="answer" />
            <label for="option2" id="b_text">Question</label>
          </li>
          <li>
            <input type="radio" id="c" name="answer" class="answer" />
            <label for="option3" id="c_text">Question</label>
          </li>
          <li>
            <input type="radio" id="d" name="answer" class="answer" />
            <label for="option4" id="d_text">Question</label>
          </li>
        </ul>
      </div>
      <button id="submit">Submit</button>
    </div>
    <div id="results">
      <!-- Quiz results will be added here dynamically -->
    </div>

    <script type='text/javascript'>
      const quizData = [
        {
          category: "Database",
          question: "Which of the following is NOT a type of database model?",
          options: [
            { text: "Hierarchical", correct: false },
            { text: "Relational", correct: false },
            { text: "Object-oriented", correct: false },
            { text: "Linear", correct: true }
          ]
        },
        {
          category: "UI/UX Design",
          question: "What is the difference between UI and UX?",
          options: [
            { text: "UI refers to the visual design, while UX refers to the overall user experience.", correct: true },
            { text: "UI refers to the user experience, while UX refers to the visual design.", correct: false },
            { text: "There is no difference between UI and UX.", correct: false },
            { text: "LUI and UX are interchangeable terms", correct: false}
          ]
        },
        {
          category: "FrontEnd",
          question: "What is the purpose of the 'viewport' meta tag in HTML?",
          options: [
            { text: "It sets the background color of the web page.", correct: false },
            { text: "It sets the width and height of the web page", correct: false },
            { text: "It sets the zoom level and scaling of the web page.", correct: true },
            { text: "It sets the font size and typeface of the web page.", correct: false }
          ]
        },
        {
          category: "BackEnd",
          question: "What is the purpose of a backend web framework, such as Ruby on Rails or Django?",
          options: [
            { text: "To design and create the user interface of a web application.", correct: false },
            { text: "To optimize the performance and speed of a web application.", correct: false },
            { text: "To implement the business logic and data management of a web application.", correct: true },
            { text: "To provide advanced features and functionality to a web application.", correct: false }
          ]
        }
      ];
    
      const quiz = document.getElementById("quiz");
      const answerEls = document.querySelectorAll(".answer");
      const questionEl = document.getElementById("question");
      const categoryEl = document.getElementById("category");
      const a_text = document.getElementById("a_text");
      const b_text = document.getElementById("b_text");
      const c_text = document.getElementById("c_text");
      const d_text = document.getElementById("d_text");
      const submitBtn = document.getElementById("submit");
    
      let currentQuiz = 0;
      let score = 0;
      let currentQuizData = null;
    
      loadQuiz();
    
      function loadQuiz() {
        answerEls.forEach(answerEl => answerEl.checked = false);
    
        currentQuizData = quizData[currentQuiz];
    
        categoryEl.innerText = currentQuizData.category;
        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.options[0].text;
        b_text.innerText = currentQuizData.options[1].text;
        c_text.innerText = currentQuizData.options[2].text;
        d_text.innerText = currentQuizData.options[3].text;
      }
    
      function getSelected() {
        let answer = undefined;
    
        answerEls.forEach((answerEl) => {
          if (answerEl.checked) {
            const optionText = answerEl.nextElementSibling.innerText;
            answer = currentQuizData.options.find((option) => option.text === optionText);
          }
        });
    
        return answer;
      }
    
      function deselectAnswers() {
        answerEls.forEach((answerEl) => {
          answerEl.checked = false;
        });
      }
    
      submitBtn.addEventListener("click", () => {
        const answer = getSelected();
    
        if (answer) {
          if (answer.correct) {
            score++;
          }
    
          currentQuiz++;
    
          if (currentQuiz < quizData.length) {
            loadQuiz();
          } else {
            // Quiz finished, show results for each category
            const categories = {};
    
            quizData.forEach((question) => {
              const category = question.category;
              const isCorrect = answer === question.options.find((option) => option.correct);
    
              if (categories[category]) {
                categories[category].total++;
                if (isCorrect) {
                  categories[category].correct++;
                }
              } else {
                categories[category] = {
                  total: 1,
                  correct: isCorrect ? 1 : 0,
                };
              }
            });
    
            const resultsContainer = document.getElementById("results");
            resultsContainer.innerHTML = "";
    
            for (const category in categories) {
              const result = categories[category];
              const percent = (result.correct / result.total) * 100;
    
              const categoryResult = document.createElement("div");
              categoryResult.classList.add("category-result");
              categoryResult.innerHTML = `
                <h3>${category}</h3>
                <p>${result.correct} out of ${result.total} (${percent.toFixed(2)}%)</p>
              `;
    
              resultsContainer.appendChild(categoryResult);
            }
    
            quiz.innerHTML = `
              <h2>You scored ${score} out of ${quizData.length} questions</h2>
              <h3>Results by Category:</h3>
            `;

      for (const category in categories) {
        const result = categories[category];
        const percent = (result.correct / result.total) * 100;

        const categoryScore = document.createElement("div");
        categoryScore.classList.add("category-score");
        categoryScore.innerHTML = `
          <p>${category}: ${result.correct}/${result.total} (${percent.toFixed(2)}%)</p>
        `;

        quiz.appendChild(categoryScore);
      }

      quiz.innerHTML += `
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});



</script>
</body>
</html>

<style>@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");

    * {
        box-sizing: border-box;
    }
    
    body {
  background-color: rgb(10, 10, 10);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding-top: 30px;
}

.quiz-container {
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
  overflow: hidden;
  width: 600px;
  max-width: 100%;
  background-color: #3F3F3F;
}

.quiz-header {
  padding: 4rem;
}

h2 {
  padding: 1rem;
  text-align: center;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  font-size: 1.2rem;
  margin: 1rem 0;
}

ul li label {
  cursor: pointer;
}

button {
  background-color: #aa84bb;
  border: none;
  color: white;
  cursor: pointer;
  display: block;
  font-family: inherit;
  font-size: 1.1rem;
  width: 100%;
  padding: 1.3rem;
}

button:hover {
  background-color: #732d91;
}

button:focus {
  background-color: #5e3370;
  outline: none;
}</style>
