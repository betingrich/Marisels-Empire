document.addEventListener('DOMContentLoaded', () => {
    const pollContainer = document.getElementById('poll-container');
    const pollResult = document.getElementById('poll-result');
    const questions = [
        {
            question: "What's your favorite color?",
            options: ["Red", "Blue"],
        },
        {
            question: "What's your favorite season?",
            options: ["Winter", "Summer"],
        },
        // Add more questions here
    ];
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'poll-container';
        questionDiv.innerHTML = `
            <h3>${q.question}</h3>
            ${q.options.map((option, i) => `
                <div class="poll-option">
                    <input type="radio" name="poll${index}" id="poll${index}Option${i}" value="${option}">
                    <label for="poll${index}Option${i}">${option}</label>
                </div>
            `).join('')}
            <button onclick="submitPoll(${index})">Submit</button>
        `;
        pollContainer.appendChild(questionDiv);
    });
});

function submitPoll(index) {
    const selectedOption = document.querySelector(`input[name="poll${index}"]:checked`);
    if (selectedOption) {
        const resultText = `You voted for: ${selectedOption.value}`;
        document.getElementById('poll-result').innerText = resultText;
    } else {
        document.getElementById('poll-result').innerText = "Please select an option.";
    }
}
