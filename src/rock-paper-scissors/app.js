const cpuChoiceDisplay = document.getElementById('cpu-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let cpuChoice
let result

possibleChoices.forEach((possibleChoice) => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateCpuChoice()
  getResult()
}))

function generateCpuChoice() {
  const randomInt = Math.floor(Math.random() * possibleChoices.length)
  cpuChoice = possibleChoices[randomInt].id
  cpuChoiceDisplay.innerHTML = cpuChoice
}

function getResult() {
  if (!userChoice || !cpuChoice) result = 'error'
  if (userChoice === cpuChoice) result = 'it\'s a draw!'
  if (userChoice === 'rock' && cpuChoice === 'paper') result = 'you lose!'
  if (userChoice === 'rock' && cpuChoice === 'scissors') result = 'you win!'
  if (userChoice === 'paper' && cpuChoice === 'rock') result = 'you win!'
  if (userChoice === 'paper' && cpuChoice === 'scissors') result = 'you lose!'
  if (userChoice === 'scissors' && cpuChoice === 'rock') result = 'you lose!'
  if (userChoice === 'scissors' && cpuChoice === 'paper') result = 'you win!'

  resultDisplay.innerHTML = result
}
