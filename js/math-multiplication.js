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

function name(params) {}

window.addEventListener('DOMContentLoaded', () => {
  nav(), console.log(randomInteger(1, 9))
})

function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}
