// const url = 'http://localhost:3000/english'
const url = 'https://ups-json-server.herokuapp.com/english'

// function getAllWords(params) {
//   fetch(url)
//     .then(response => {
//       return response.json()
//     })
//     .then(data => {
//       renderWords(data)
//     })
// }

// function renderWords(data) {
//   console.log('render')
//   const wordList = document.querySelector('.word-list')

//   data.forEach(el => {
//     const html = `
// 		<div class="word-list__item item-word-list">
// 			<div class="item-word-list__item item-word-list__item_ru">
// 				${el.ru}
// 			</div>
// 			<div class="item-word-list__item item-word-list__item_en">${el.en}</div>
// 		</div>`
//     wordList.insertAdjacentHTML('afterbegin', html)
//   })
// }

document
  .querySelector('.modal-add-data__item_button')
  .addEventListener('click', async () => {
    const ru = document.querySelector('#ru').value
    const en = document.querySelector('#en').value
    if (ru && en) {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ru, en, complete: false }),
      })
      const data = await res.json()
      console.log(data)
      wordToHtml(data)
    }
  })

async function getAllWords() {
  const res = await fetch(url)
  const allWords = await res.json()
  console.log(allWords)
  allWords.forEach(el => wordToHtml(el))
}

async function deleteWord(id) {
  const res = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  const data = await res.json()
  console.log(`data`, data)

  if (data) {
    document.querySelector(`#word_${id}`).remove()
  }
}

async function editWord(id) {
  console.log(id)
  const complete = document.querySelector(`#word_${id} input`).checked
  console.log(complete)
  const res = await fetch(`${url}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ complete: complete }),
  })
  const data = await res.json()
  console.log(data)
}

window.addEventListener('DOMContentLoaded', getAllWords)

function wordToHtml({ id, ru, en, complete }) {
  const wordList = document.querySelector('.word-list')

  wordList.insertAdjacentHTML(
    'beforeend',
    `
    <div class="word-list__item item-word-list" id="word_${id}">
    <div class="item-word-list__item item-word-list__item_id">${id}</div>
    
    <div class="item-word-list__item item-word-list__item_ru">
      ${ru}
    </div>
    <div class="item-word-list__item item-word-list__item_en">${en}</div>
    <input onchange="editWord(${id})" type="checkbox" class="word-list__check" ${
      complete && 'checked'
    } />
    <button onclick="deleteWord(${id})" class="word-list__delete"></button>
  </div>
	`
  )
}

//<allWordsBtn>====================================================================================================
// if (document.querySelector('.all-words-btn')) {
//   const allWordsBtn = document.querySelector('.all-words-btn')
//   allWordsBtn.addEventListener('click', function (e) {
//     getAllWords()
//     allWordsBtn.setAttribute('disabled', true)
//   })
// }
