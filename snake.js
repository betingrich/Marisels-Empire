const canvas = document.getElementById('snake-board');
const context = canvas.getContext('2d');
const blockSize = 10;
const width = canvas.width / blockSize;
const height = canvas.height / blockSize;
let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 15 };
let dx = 1;
let dy = 0;

function drawBlock(x, y, color) {
    context.fillStyle = color;
    context.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
}

function drawSnake() {
    snake.forEach(segment => {
        drawBlock(segment.x, segment.y, '#0f0');
    });
}

function drawFood() {
    drawBlock(food.x, food.y, '#f00');
}

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    let head = { x: snake[0].x + dx, y: snake[0].y + dy };

    if (head.x === food.x && head.y === food.y) {
        snake.unshift(head);
        food = { x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height) };
    } else {
        snake.pop();
        snake.unshift(head);
    }

    drawSnake();
    drawFood();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') { dx = 0; dy = -1; }
    if (e.key === 'ArrowDown') { dx = 0; dy = 1; }
    if (e.key === 'ArrowLeft') { dx = -1; dy = 0; }
    if (e.key === 'ArrowRight') { dx = 1; dy = 0; }
});

setInterval(update, 100);
