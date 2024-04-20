const questions = [
    {
        'que': 'what is the full form of HTML?',
        'options': ['Hyper Text Markup Language', 'Hyper Type Markup Language', 'Hyper Type Madeof Language', 'Hyper Text Madeof Language'],
        'correct': 'a',
    },
    {
        'que': 'what is the full form of CSS?',
        'options': ['Cascading Style Sheets', 'Cascading Standard Sheets', 'Cascading Standard Short', 'Cambridge Style Sheets'],
        'correct': 'a',
    },
];

const quiz = document.getElementById('quiz');
const quebox = document.getElementById('quebox');
const labels = [document.getElementById('label1'), document.getElementById('label2'), document.getElementById('label3'), document.getElementById('label4')];
const options = [document.getElementById('option1'), document.getElementById('option2'), document.getElementById('option3'), document.getElementById('option4')];
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const currentQuestionData = questions[currentQuestion];

    quebox.textContent = currentQuestionData.que;
    for (let i = 0; i < 4; i++) {
        labels[i].textContent = currentQuestionData.options[i];
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }

    const answer = selectedOption.value;
    const currentQuestionData = questions[currentQuestion];
    if (answer === currentQuestionData.correct) {
        score++;
    }

    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${questions.length} questions.</h2>`;
    }
}

loadQuiz();

submitBtn.addEventListener("click", checkAnswer);
