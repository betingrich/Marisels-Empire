const questions = [
    { question: "Is the sky blue?", answers: ["Yes", "No"], correct: 0 },
    { question: "Is 2 + 2 = 4?", answers: ["Yes", "No"], correct: 0 },
    { question: "Does a triangle have three sides?", answers: ["Yes", "No"], correct: 0 },
    { question: "Is the Earth flat?", answers: ["Yes", "No"], correct: 1 },
    { question: "Can humans breathe underwater unaided?", answers: ["Yes", "No"], correct: 1 },
    { question: "Is JavaScript a programming language?", answers: ["Yes", "No"], correct: 0 },
    { question: "Is HTML used for styling websites?", answers: ["Yes", "No"], correct: 1 },
    { question: "Is the sun a star?", answers: ["Yes", "No"], correct: 0 },
    { question: "Can an octopus change its color?", answers: ["Yes", "No"], correct: 0 },
    { question: "Is Mount Everest the highest mountain in the world?", answers: ["Yes", "No"], correct: 0 },
    { question: "Does water boil at 100°C?", answers: ["Yes", "No"], correct: 0 },
    { question: "Is Mars known as the Red Planet?", answers: ["Yes", "No"], correct: 0 },
    { question: "Is a bee an insect?", answers: ["Yes", "No"], correct: 0 },
    { question: "Do penguins live at the North Pole?", answers: ["Yes", "No"], correct: 1 },
    { question: "Is the Great Wall of China visible from space?", answers: ["Yes", "No"], correct: 1 },
    // Add more questions as needed
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const choices = document.getElementById('choices');
    const question = questions[currentQuestionIndex];

    questionElement.textContent = question.question;
    document.getElementById('choice-0').textContent = question.answers[0];
    document.getElementById('choice-1').textContent = question.answers[1];
}

function selectAnswer(choice) {
    const question = questions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');

    if (choice === question.correct) {
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = `Incorrect! The correct answer was: ${question.answers[question.correct]}`;
    }

    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    setTimeout(loadQuestion, 2000);
    feedback.textContent = "";
}

window.onload = loadQuestion;
