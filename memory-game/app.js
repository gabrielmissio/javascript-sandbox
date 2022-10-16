const cards = [
  {
    name: '0001',
    img: 'images/0001.jpg'
  },
  {
    name: '0002',
    img: 'images/0002.jpg'
  },
  {
    name: '0003',
    img: 'images/0003.jpg'
  },
  {
    name: '0004',
    img: 'images/0004.jpg'
  },
  {
    name: '0005',
    img: 'images/0005.jpg'
  },
  {
    name: '0006',
    img: 'images/0006.jpg'
  }
]

const gridDisplay = document.querySelector('#grid')
const scoreDisplay = document.querySelector('#score')
const hitsDisplay = document.querySelector('#hits')
const deck = []
const wonCards = []
let chosenCards = []
let isBlocked = false
let hits = 0
let score = 0

cards.forEach((card) => deck.push(card,card))
deck.sort(() => 0.5 - Math.random())

function createBoard() {
  for (let index = 0; index < deck.length; index++) {
    const cardDisplay = document.createElement('img')
    cardDisplay.setAttribute('id', index)
    cardDisplay.setAttribute('src', 'images/blank.jpg')
    cardDisplay.setAttribute('width', 150)
    cardDisplay.setAttribute('height', 100)
    cardDisplay.addEventListener('click', flipCard)
    gridDisplay.appendChild(cardDisplay)
  }
}

function checkMatch() {
  const [ cardOne, cardTwo ] = chosenCards
  const isSameCard = cardOne.getAttribute('id') === cardTwo.getAttribute('id')
  const isMatch = !isSameCard && cardOne.getAttribute('src') === cardTwo.getAttribute('src')

  if (isSameCard) alert('same card!')
  
  if (isMatch) {
    alert('score!')
    wonCards.push(cardOne, cardTwo)
    cardOne.setAttribute('src', 'images/white.png')
    cardTwo.setAttribute('src', 'images/white.png')
    cardOne.removeEventListener('click', flipCard)
    cardTwo.removeEventListener('click', flipCard)
    score += 10 + hits
    hits += 1
  } else {
    hits = 0
    cardOne.setAttribute('src', 'images/blank.jpg')
    cardTwo.setAttribute('src', 'images/blank.jpg')
  }
  
  scoreDisplay.innerHTML = score
  hitsDisplay.innerHTML = hits
  isBlocked = false
  chosenCards = []
}

function flipCard() {
  if (isBlocked) return null

  const cardId = this.getAttribute('id')
  const cardImg = deck[cardId].img
  this.setAttribute('src', cardImg)

  chosenCards.push(this)
  if (chosenCards.length === 2) {
    isBlocked = true
    setTimeout(checkMatch, 500)
  }
}

createBoard()
