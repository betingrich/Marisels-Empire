const pollResults = {};

function vote(option, questionId) {
    if (!pollResults[questionId]) {
        pollResults[questionId] = { yes: 0, no: 0 };
    }

    pollResults[questionId][option]++;

    const resultElement = document.getElementById(`poll-result-${questionId}`);
    const totalVotes = pollResults[questionId].yes + pollResults[questionId].no;
    const yesPercentage = ((pollResults[questionId].yes / totalVotes) * 100).toFixed(2);
    const noPercentage = ((pollResults[questionId].no / totalVotes) * 100).toFixed(2);

    resultElement.innerHTML = `
        <p>Yes: ${yesPercentage}%</p>
        <p>No: ${noPercentage}%</p>
    `;
}
