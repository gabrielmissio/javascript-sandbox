const scoreDisplay = document.querySelector('#score')
const squares = document.querySelectorAll('.square')
let score = 0
let molePosition

for (const square of squares) {
  square.addEventListener('mousedown', (e) => {
    if (e.target.id === molePosition) {
      score += 1
      scoreDisplay.innerHTML = score
    }
  })
}

function moveMoleToRandomSquare() {
  for (const square of squares) {
    square.classList.remove('mole')
  }

  const randomSquareIndex = Math.floor(Math.random() * squares.length)
  const square = squares[randomSquareIndex]
  
  square.classList.add('mole')
  molePosition = square.id
}

setInterval(moveMoleToRandomSquare, 500)
