const gridDisplay = document.querySelector('.grid')
const userDisplay = document.createElement('div')
const ballDisplay = document.createElement('div')
const gridWidth = 560
const gridHeight = 300
const blockWidth = 70
const blockHeight = 10
const userInitialPosition = [240, 50]
const ballInitialPosition = [265, 220]
const ballDiameter = 20
let userCurrentPosition = null
let ballId = null
let ballCurrentPosition = null
let ballCurrentDirectionX = null
let ballCurrentDirectionY = null

class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRigth = [xAxis + blockWidth , yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

const blocks = [
    new Block(35, 250),
    new Block(135, 250),
    new Block(235, 250),
    new Block(335, 250),
    new Block(435, 250),
    new Block(35, 270),
    new Block(135, 270),
    new Block(235, 270),
    new Block(335, 270),
    new Block(435, 270),
]

function createBlocks() {
    for (const block of blocks) {
        const blockDisplay = document.createElement('div')
        blockDisplay.classList.add('block')
        blockDisplay.style.left = `${block.bottomLeft[0]}px`
        blockDisplay.style.bottom = `${block.bottomLeft[1]}px`
        gridDisplay.appendChild(blockDisplay)
    }
}

function drawUser() {
    userDisplay.style.left = `${userCurrentPosition[0]}px`
    userDisplay.style.bottom = `${userCurrentPosition[1]}px`
}

function drawBall() {
    ballDisplay.style.left = `${ballCurrentPosition[0]}px`
    ballDisplay.style.bottom = `${ballCurrentPosition[1]}px`
}

function createUser() {
    userDisplay.classList.add('user')
    userCurrentPosition = userInitialPosition
    drawUser()
    gridDisplay.appendChild(userDisplay)
}

function randomNumber(min, max) { 
    const result = Math.random() * (max - min) + min
    return result
}

function createBall() {
    ballDisplay.classList.add('ball')
    ballCurrentPosition = ballInitialPosition
    ballCurrentDirectionY = 1
    ballCurrentDirectionX = randomNumber(0, 1) %2 === 0 ? 1 : -1
    drawBall()
    gridDisplay.appendChild(ballDisplay)
}

function moveUser(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (userCurrentPosition[0] > 0) {
                userCurrentPosition[0] -= 12
                drawUser()
            }
            break
        case 'ArrowRight':
            if (userCurrentPosition[0] < (gridWidth - blockWidth)) {
                userCurrentPosition[0] += 12
                drawUser()
            }
            break
    }
}

function changeBallDirection() {
    // ball falling
    if (ballCurrentDirectionY === -1 && ballCurrentDirectionX === 1) {
        ballCurrentDirectionX = -1
        return
    }
    if (ballCurrentDirectionY === -1 && ballCurrentDirectionX === -1) {
        ballCurrentDirectionY = 1
        return
    }

    // ball rising
    if (ballCurrentDirectionY === 1 && ballCurrentDirectionX === 1) {
        ballCurrentDirectionY = -1
        return
    }
    if (ballCurrentDirectionY === 1 && ballCurrentDirectionX === -1) {
        ballCurrentDirectionX = 1
        return
    }
}

function hitBall() {
    ballCurrentDirectionY = 1
}

function checkBallCollision() {
    // check grid collision
    if (
        ballCurrentPosition[1] >= gridHeight - ballDiameter ||
        ballCurrentPosition[0] <= 0 ||
        ballCurrentPosition[0] >= gridWidth - ballDiameter
    ) {
        changeBallDirection()
    }

    // check user collision
    if (
        ballCurrentPosition[1] === userCurrentPosition[1] + 10 &&
        (
            ballCurrentPosition[0] <= userCurrentPosition[0] + blockWidth &&
            ballCurrentPosition[0] >= userCurrentPosition[0]
        )
    ) {
        hitBall()
    }

    // check floor collision
    if (ballCurrentPosition[1] <= 0) {
        alert('game over')
        clearInterval(ballId)
    }
}

function moveBall() {
    ballCurrentPosition[0] += ballCurrentDirectionX
    ballCurrentPosition[1] += ballCurrentDirectionY
    drawBall()
    checkBallCollision()
}

function start() {
    document.addEventListener('keydown', moveUser)
    createBlocks()
    createUser()
    createBall()
    ballId = setInterval(moveBall, 7)
}

start()
