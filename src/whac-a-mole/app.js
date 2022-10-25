const scoreDisplay = document.querySelector('#score')
const timeLeftDisplay = document.querySelector('#time-left')
const squares = document.querySelectorAll('.square')
let timeLeft = 15
let score = 0
let molePosition
let moleId
let timeLeftId

scoreDisplay.innerHTML = score
timeLeftDisplay.innerHTML = timeLeft

function moveMoleToRandomSquare() {
  for (const square of squares) {
    square.classList.remove('mole')
  }

  const randomSquareIndex = Math.floor(Math.random() * squares.length)
  const square = squares[randomSquareIndex]

  square.classList.add('mole')
  molePosition = square.id
}

function moleClickHandler(e) {
  if (e.target.id === molePosition) {
    score += 1
    scoreDisplay.innerHTML = score
  }
}

function countDown() {
  timeLeft -= 1
  timeLeftDisplay.innerHTML = timeLeft

  if (timeLeft === 0) stop()
}

function start() {
  for (const square of squares) {
    square.addEventListener('mousedown', moleClickHandler)
  }

  moleId = setInterval(moveMoleToRandomSquare, 500)
  timeLeftId = setInterval(countDown, 1000)
}

function stop() {
  for (const square of squares) {
    square.removeEventListener('mousedown', moleClickHandler)
  }

  clearInterval(timeLeftId)
  clearInterval(moleId)
}

start()
