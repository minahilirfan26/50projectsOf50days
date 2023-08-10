const quizSelector = document.getElementById("quiz-selector");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const answerButtonsContainer = document.getElementById("answer-buttons-container");
const resultsContainer = document.getElementById("results-container");

class Quiz{
   
    constructor (questions){
        this.questions = Quiz.shuffleArray(questions);
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    displayQuestion(){
        answerButtonsContainer.innerHTML = "";
       const currentQuestion = this.questions[this.currentQuestionIndex];
       questionContainer.textContent = currentQuestion.question;
       const answers = Quiz.shuffleArray(currentQuestion.answers);
       answers.forEach((answer)=>{
        const buttons = document.createElement("button");
        buttons.classList = ["answer-button"];
        buttons.textContent = answer;
        buttons.addEventListener("click", this.checkAnswer.bind(this));
        answerButtonsContainer.appendChild(buttons);
       })
    }

    checkAnswer(event){
        const currentQuestion = this.questions[this.currentQuestionIndex];
     const selectedAnswer = event.target.textContent;
     if (selectedAnswer === currentQuestion.correctAnswer) {
        this.score++;
        
     }

     this.currentQuestionIndex++;
     if (this.currentQuestionIndex < this.questions.length) {
        this.displayQuestion();
     } else{
        this.showResult();
     }
    }

    showResult(){
        quizContainer.style.display = "none";
        resultsContainer.style.display = "block";
        resultsContainer.innerHTML = `
        <h2>Quiz Result</h2>
        <p>You Scored ${this.score} out of ${this.questions.length} questions</p>
        <button id="reload-quiz">Reload All quiz</button>
        `;
        document.getElementById("reload-quiz").addEventListener("click", ()=>{
            questionContainer.style.display = "none";
            resultsContainer.style.display = "none";
            quizSelector.style.display = "flex";
        })
    }

    static shuffleArray(arr){
        return [...arr].sort(() =>Math.random() - 0.5)
    }
}


const loadQuiz = (questions)=>{
  const quiz = new Quiz(questions);
  quiz.displayQuestion();
  quizContainer.style.display = "block";
  quizSelector.style.display = "none";
}



const loadAllQuiz = async ()=>{
    const response = await fetch("./quizzes.json");
    const quizzes = await response.json();

    quizzes.forEach((quiz,index)=>{
        const quizCard = document.createElement("div");
        quizCard.classList = ["quiz-card"];
        quizCard.innerText = "Quiz" + (index+1);
        quizCard.addEventListener("click", ()=> loadQuiz(quiz));
        quizSelector.appendChild(quizCard);
    })
} 
loadAllQuiz()
