document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const cards = [];
    const emojis = [
        '🦁', '🐯', '🦒', '🦓', '🐵', '🦘', '🦊', '🐠', '😭', '😘', '🐕', '🌞', '🍆',
        '🦁', '🐯', '🦒', '🦓', '🐵', '🦘', '🦊', '🐠', '😭', '😘', '🐕', '🌞', '🍆',
        '🌟', '🌈', '🌍', '🌜', '🌹', '🍎', '🍍', '🍉', '🍕', '🍔', '🍣', '🌮', '🍩',
        '🌟', '🌈', '🌍', '🌜', '🌹', '🍎', '🍍', '🍉', '🍕', '🍔', '🍣', '🌮', '🍩'
    ];
    let firstCard, secondCard;
    let lockBoard = false;
    let matchedPairs = 0;

    function createBoard() {
        const shuffledEmojis = shuffle([...emojis, ...emojis]);
        shuffledEmojis.forEach((emoji) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.emoji = emoji;
            const span = document.createElement('span');
            span.textContent = '❖'; // Placeholder for card back
            card.appendChild(span);
            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
            cards.push(card);
        });
    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function flipCard() {
        if (lockBoard || this === firstCard || this.classList.contains('matched')) return;

        this.classList.add('flipped');
        this.querySelector('span').textContent = this.dataset.emoji;

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        const isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;

        if (isMatch) {
            disableCards();
            matchedPairs++;
            if (matchedPairs === emojis.length) {
                setTimeout(() => alert('Congratulations! You\'ve matched all pairs!'), 500);
            }
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.querySelector('span').textContent = '❓'; // Card back
            secondCard.querySelector('span').textContent = '❓'; // Card back
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    createBoard();
});
