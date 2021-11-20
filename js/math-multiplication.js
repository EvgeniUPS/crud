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

function checkAnswer() {
  const num1 = document.querySelector('.item-training__num1')
  num1.innerHTML = randomInteger(1, 9)
  const num2 = document.querySelector('.item-training__num2')
  num2.innerHTML = randomInteger(1, 9)
  const sign = document.querySelector('.item-training__sign')
  const answer = document.querySelector('.item-training__answer')

  const answerBlock = document.querySelector('.answer-training')

  console.log(`num1.value`, +num1.innerHTML)
  console.log(`num2.value`, +num2.innerHTML)

  const rightAnswer = num1.innerHTML * num2.innerHTML
  console.log(`rightAnswer`, rightAnswer)

  answerBlock.addEventListener('click', function (e) {
    if (e.target.classList.contains('answer-training__item')) {
      const selectedAnswer = +e.target.innerHTML
      console.log(`selectedAnswer`, selectedAnswer)
      if (selectedAnswer === rightAnswer) {
        answer.innerHTML = rightAnswer
      }
    }
  })
}

window.addEventListener('DOMContentLoaded', () => {
  nav(), console.log(randomInteger(1, 9)), checkAnswer()
})

function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

console.log(randomInteger(1, 9))
