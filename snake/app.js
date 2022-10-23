const gridDisplay = document.querySelector('.grid')
const gridDimensions = { width: 400, height: 400 }
const pieceOfSnakeDimensions = { width: 20, height: 20 }
const snakeInitialPosition = { x: 100, y: 100 }
const directions = {
    right: { x: 20, y: 0 },
    left: { x: -20, y: 0 },
    up: { x: 0, y: 20 },
    down: { x: 0, y: -20 }
}
const snake = {}
let timerId = null

function start() {
    snake.body = [snakeInitialPosition]
    snake.direction = directions.right

    document.addEventListener('keydown', changeSnakeDirection)
    timerId = setInterval(moveSnake, 200)
}

function changeSnakeDirection(e) {
    switch(e.key) {
        case 'ArrowRight':
            snake.direction = directions.right
            break
        case 'ArrowLeft':
            snake.direction = directions.left
            break
        case 'ArrowUp':
            snake.direction = directions.up
            break
        case 'ArrowDown':
            snake.direction = directions.down
            break
    }
}

function moveSnake() {
    const currentSnakeHeadPosition = snake.body[0]
    const nextSnakeHeadPosition = {
        x: currentSnakeHeadPosition.x + snake.direction.x,
        y: currentSnakeHeadPosition.y + snake.direction.y
    }

    snake.body.unshift(nextSnakeHeadPosition)
    
    isScore() ? eatFood() : snake.body.pop()
    isGameOver() ? gameOver() : drawSnake()
}

function isScore() {
    return false
}

function eatFood() {
    // score ++
    // remove current food
    // create new food
}


function isGameOver() {
    const currentSnakeHeadPosition = snake.body[0]

    // wall collision
    if (
        currentSnakeHeadPosition.x < 0 ||
        currentSnakeHeadPosition.x > gridDimensions.width - pieceOfSnakeDimensions.width ||
        currentSnakeHeadPosition.y < 0 ||
        currentSnakeHeadPosition.y > gridDimensions.height - pieceOfSnakeDimensions.height
    ) return true

    // snake collision
    let snakeHeadCollisions = 0
    for (const pieceOfSnake of snake.body) {
        if (JSON.stringify(currentSnakeHeadPosition) === JSON.stringify(pieceOfSnake)) {
            snakeHeadCollisions++
        }
    }
    if (snakeHeadCollisions > 1) return true

    return false
}

function gameOver() {
    clearInterval(timerId)
    alert('gameover')
}


function drawSnake() {
    const allPiecesOfSnakeDisplay = document.querySelectorAll('.snake')
    for (const pieceOfSnakeDisplay of allPiecesOfSnakeDisplay) {
        pieceOfSnakeDisplay.remove()
    }

    for (const pieceOfSnake of snake.body) {
        const pieceOfSnakeDisplay = document.createElement('div')
        pieceOfSnakeDisplay.classList.add('snake')
        pieceOfSnakeDisplay.style.left = `${pieceOfSnake.x}px`
        pieceOfSnakeDisplay.style.bottom = `${pieceOfSnake.y}px`
        gridDisplay.appendChild(pieceOfSnakeDisplay)
    }
}

start()
