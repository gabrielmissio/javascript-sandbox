const gridDisplay = document.querySelector('.grid')
const userDisplay = document.createElement('div')
const ballDisplay = document.createElement('div')
const gridWidth = 560
const blockWidth = 70
const blockHeight = 10
const userInitialPosition = [240, 50]
const ballInitialPosition = [265, 220]
let ballCurrentPosition = null

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
        const displayBlock = document.createElement('div')
        displayBlock.classList.add('block')
        displayBlock.style.left = `${block.bottomLeft[0]}px`
        displayBlock.style.bottom = `${block.bottomLeft[1]}px`
        gridDisplay.appendChild(displayBlock)
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

function createBall() {
    ballDisplay.classList.add('ball')
    ballCurrentPosition = ballInitialPosition
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

function moveBall() {
    if(ballCurrentPosition[1] > 0) {
        ballCurrentPosition[0] -= 1
        ballCurrentPosition[1] -= 2
        drawBall()
    }
}

function start() {
    document.addEventListener('keydown', moveUser)
    createBlocks()
    createUser()
    createBall()
    setInterval(moveBall, 12)
}

start()
