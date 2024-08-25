const gameBoard = document.getElementById('memory-game');
const message = document.getElementById('message');
const cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'];
let cards = [];
let flippedCards = [];
let matchedCards = 0;

function initGame() {
    cardValues.sort(() => Math.random() - 0.5); // Shuffle cards
    cardValues.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-value', value);
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
        cards.push(card);
    });
}

function flipCard() {
    const card = this;
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        card.textContent = card.getAttribute('data-value');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.getAttribute('data-value') === card2.getAttribute('data-value')) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards += 2;
        if (matchedCards === cardValues.length) {
            message.textContent = 'Congratulations! You have matched all pairs!';
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = '';
            card2.textContent = '';
        }, 1000);
    }
    flippedCards = [];
}

initGame();
