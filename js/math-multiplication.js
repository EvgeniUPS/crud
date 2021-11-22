const minNum = 1
const maxNum = 9

function nav() {
  const tableBtn = document.querySelector('.table-btn')
  const tableSection = document.querySelector('.table')

  const trainingBtn = document.querySelector('.training-btn')
  const trainingSection = document.querySelector('.training')
  /*  */
  trainingBtn.classList.add('_active')
  trainingSection.classList.add('_active')

  tableBtn.classList.remove('_active')
  tableSection.classList.remove('_active')
  /*  */

  tableBtn.addEventListener('click', function (e) {
    console.log('table')
    tableBtn.classList.add('_active')
    tableSection.classList.add('_active')

    trainingBtn.classList.remove('_active')
    trainingSection.classList.remove('_active')
  })

  trainingBtn.addEventListener('click', function (e) {
    trainingBtn.classList.add('_active')
    trainingSection.classList.add('_active')

    tableBtn.classList.remove('_active')
    tableSection.classList.remove('_active')
  })
}

function createExample(min, max) {
  const num1 = document.querySelector('.item-training__num1')
  num1.innerHTML = randomInteger(min, max)
  const num2 = document.querySelector('.item-training__num2')
  num2.innerHTML = randomInteger(min, max)
  const sign = document.querySelector('.item-training__sign')

  const rightAnswer = num1.innerHTML * num2.innerHTML
  console.log(`rightAnswer`, rightAnswer)
  return rightAnswer
}

function createAnswerBlock(rightAnswer) {
  const answerBlock = document.querySelector('.answer-training')
  answerBlock.innerHTML = ''
  const arrAnswer = [
    randomInteger(1, 99),
    randomInteger(1, 99),
    randomInteger(1, 99),
    randomInteger(1, 99),
    rightAnswer,
  ].sort(() => Math.random() - 0.5)
  console.log(`arrAnswer`, arrAnswer)

  arrAnswer.forEach(el => {
    const answerItem = `
    <div class="answer-training__item">${el}</div>
    `
    answerBlock.insertAdjacentHTML('afterbegin', answerItem)
  })
}
const trainingStartBlock = document.querySelector('.training-start')
const newGameBtn = document.querySelector('.training-start__button')

function checkAnswer(rightAnswer) {
  const answer = document.querySelector('.item-training__answer')
  const answerBlock = document.querySelector('.answer-training')

  answerBlock.addEventListener('click', function (e) {
    if (e.target.classList.contains('answer-training__item')) {
      const selectedAnswer = +e.target.innerHTML
      console.log(`selectedAnswer`, selectedAnswer)
      if (selectedAnswer === rightAnswer) {
        // document.getElementById('errorSound').play()
        answer.innerHTML = rightAnswer
        e.target.classList.add('right-answer')
        trainingStartBlock.classList.add('_active')
        newGameBtn.addEventListener('click', function (e) {
          document.querySelector('.item-training__answer').innerHTML = ''
          newGame()
        })
      } else {
        e.target.classList.add('wrong-answer')
      }
    }
  })
}
const rightAnswer = createExample(minNum, maxNum)

function newGame() {
  trainingStartBlock.classList.remove('_active')
  const rightAnswer = createExample(minNum, maxNum)
  createAnswerBlock(rightAnswer)
  checkAnswer(rightAnswer)
}

window.addEventListener('DOMContentLoaded', () => {
  nav(), newGame()
})

function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

console.log(randomInteger(1, 9))
// function randomArrayAnswer(params) {
//   const arr = [
//     randomInteger(1, 99),
//     randomInteger(1, 99),
//     randomInteger(1, 99),
//     randomInteger(1, 99),
//     555,
//   ].sort(() => Math.random() - 0.5)
//   return arr
// }
// console.log(`randomArrayAnswer`, randomArrayAnswer())
