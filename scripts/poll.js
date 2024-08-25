const pollQuestions = [
    {
        question: 'What is your favorite color?',
        options: ['Red', 'Blue', 'Green', 'Yellow'],
        votes: [10, 20, 5, 15]
    },
    {
        question: 'What is your favorite season?',
        options: ['Winter', 'Spring', 'Summer', 'Fall'],
        votes: [30, 25, 20, 15]
    }
    // Add more polls as needed
];

function loadPoll() {
    const pollContainer = document.querySelector('.poll-container');
    let pollHTML = '';

    pollQuestions.forEach((poll, index) => {
        const totalVotes = poll.votes.reduce((a, b) => a + b, 0);
        pollHTML += `
            <div class="poll">
                <h2>${poll.question}</h2>
                ${poll.options.map((option, i) => {
                    const percentage = ((poll.votes[i] / totalVotes) * 100).toFixed(2);
                    return `
                        <div class="option">
                            ${option} (${percentage}%)
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    });

    pollContainer.innerHTML = pollHTML;
}

document.addEventListener('DOMContentLoaded', loadPoll);
