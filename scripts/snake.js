const canvas = document.getElementById('snakeCanvas');
const context = canvas.getContext('2d');

// Set canvas size
canvas.width = 400;
canvas.height = 400;

const grid = 20;
let count = 0;
let snake = [{ x: 160, y: 160 }];
let dx = grid;
let dy = 0;
let food = { x: 320, y: 320 };

function gameLoop() {
    requestAnimationFrame(gameLoop);

    if (++count < 4) return;

    count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);

    moveSnake();
    drawFood();
    drawSnake();
    checkCollision();
}

function drawSnake() {
    context.fillStyle = 'green';
    snake.forEach(part => context.fillRect(part.x, part.y, grid, grid));
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        createFood();
    } else {
        snake.pop();
    }
}

function drawFood() {
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, grid, grid);
}

function createFood() {
    food.x = Math.floor(Math.random() * (canvas.width / grid)) * grid;
    food.y = Math.floor(Math.random() * (canvas.height / grid)) * grid;
}

function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        resetGame();
    }
    snake.slice(1).forEach(part => {
        if (head.x === part.x && head.y === part.y) {
            resetGame();
        }
    });
}

function resetGame() {
    snake = [{ x: 160, y: 160 }];
    dx = grid;
    dy = 0;
    createFood();
}

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp' && dy === 0) { dx = 0; dy = -grid; }
    if (e.key === 'ArrowDown' && dy === 0) { dx = 0; dy = grid; }
    if (e.key === 'ArrowLeft' && dx === 0) { dx = -grid; dy = 0; }
    if (e.key === 'ArrowRight' && dx === 0) { dx = grid; dy = 0; }
});

requestAnimationFrame(gameLoop);
