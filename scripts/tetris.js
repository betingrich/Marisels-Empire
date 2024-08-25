// Simple Tetris implementation for demo purposes
const canvas = document.getElementById('tetrisCanvas');
const context = canvas.getContext('2d');

// Set canvas size
canvas.width = 300;
canvas.height = 600;

// Add your Tetris game logic here
// Example: Drawing a rectangle to represent a block
context.fillStyle = 'cyan';
context.fillRect(50, 50, 50, 50);
