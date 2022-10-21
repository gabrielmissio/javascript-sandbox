const gridDisplay = document.querySelector('.grid')
const displayUser = document.createElement('div')
const gridWidth = 560
const blockWidth = 70
const blockHeight = 10
const userInitialPosition = [240, 50]
let userCurrentPosition = null

class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRigth = [xAxis + blockWidth , yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

const blocks = [
    new Block(30, 250),
    new Block(130, 250),
    new Block(230, 250),
    new Block(330, 250),
    new Block(430, 250),
    new Block(30, 270),
    new Block(130, 270),
    new Block(230, 270),
    new Block(330, 270),
    new Block(430, 270),
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
    displayUser.style.left = `${userCurrentPosition[0]}px`
    displayUser.style.bottom = `${userCurrentPosition[1]}px`
}

function createUser() {
    displayUser.classList.add('user')
    userCurrentPosition = userInitialPosition
    drawUser()
    gridDisplay.appendChild(displayUser)
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

function start() {
    document.addEventListener('keydown', moveUser)
    createBlocks()
    createUser()
}

start()
