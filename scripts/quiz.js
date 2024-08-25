const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris'
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Jupiter'
    }
    // Add more questions as needed
];

function loadQuiz() {
    const questionContainer = document.getElementById('question-container');
    let questionHTML = '';

    questions.forEach((q, index) => {
        questionHTML += `
            <div class="question">
                <h2>${q.question}</h2>
                ${q.options.map(option => `<div class="option">${option}</div>`).join('')}
            </div>
        `;
    });

    questionContainer.innerHTML = questionHTML;
}

document.addEventListener('DOMContentLoaded', loadQuiz);
