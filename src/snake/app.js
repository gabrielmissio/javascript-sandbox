const gridDisplay = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
const resultDisplay = document.querySelector('#result')
const gridDimensions = { width: 400, height: 400 }
const pieceOfSnakeDimensions = { width: 20, height: 20 }
const snakeInitialPosition = { x: 100, y: 100 }
const timeToNextFrameInMilliseconds = 100
const snake = {}
const directions = {
    right: { x: 20, y: 0 },
    left: { x: -20, y: 0 },
    up: { x: 0, y: 20 },
    down: { x: 0, y: -20 }
}
let score = null
let timerId = null
let availablePositions = null
let currentFoodPosition = null

function start() {
    snake.body = [snakeInitialPosition]
    snake.direction = directions.right

    score = 0
    scoreDisplay.innerHTML = score
    resultDisplay.innerHTML = null

    updateFoodPosition()
    drawFood()

    document.addEventListener('keydown', changeSnakeDirection)
    timerId = setInterval(moveSnake, timeToNextFrameInMilliseconds)
}

function updateFoodPosition() {
    availablePositions = []

    for (let x = 0; x < gridDimensions.width; x += pieceOfSnakeDimensions.width) {
        for (let y = 0; y < gridDimensions.height; y += pieceOfSnakeDimensions.height) {
            const positionAlreadyInUse = snake.body.find((pieceOfSnake) =>
                pieceOfSnake.x === x &&
                pieceOfSnake.y === y
            )

            if (!positionAlreadyInUse) availablePositions.push({ x, y })
        }
    }

    const randomIndex = Math.floor(Math.random() * availablePositions.length)
    currentFoodPosition = availablePositions[randomIndex]
}

function drawFood() {
    const allFoodsDisplay = document.querySelectorAll('.food')
    for (const foodDisplay of allFoodsDisplay) {
        foodDisplay.remove()
    }

    const foodDisplay = document.createElement('div')
    foodDisplay.classList.add('food')
    foodDisplay.style.left = `${currentFoodPosition.x}px`
    foodDisplay.style.bottom = `${currentFoodPosition.y}px`
    gridDisplay.appendChild(foodDisplay)
}

function changeSnakeDirection(e) {
    switch(e.key) {
        case 'ArrowRight':
            if (snake.direction !== directions.left) {
                snake.direction = directions.right
            }
            break
        case 'ArrowLeft':
            if (snake.direction !== directions.right) {
                snake.direction = directions.left
            }
            break
        case 'ArrowUp':
            if (snake.direction !== directions.down) {
                snake.direction = directions.up
            }
            break
        case 'ArrowDown':
            if (snake.direction !== directions.up) {
                snake.direction = directions.down
            }
            break
        case 'Enter':
            restart()
            break
    }
}

function restart() {
    gameOver()
    start()
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
    return JSON.stringify(snake.body[0]) === JSON.stringify(currentFoodPosition)
}

function eatFood() {
    currentFoodPosition = null

    score += 10
    scoreDisplay.innerHTML = score

    updateFoodPosition()
    drawFood()
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
    resultDisplay.innerHTML = 'Game Over'
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
