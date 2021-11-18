const url = 'http://localhost:3000/english?_limit=3'

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

document.querySelector('.add-word-btn').addEventListener('click', async () => {
  const addWordInput = document.querySelector('.add-word-input')
  console.log('add')
  const pageTitle = document.querySelector('.page-title')
  pageTitle.innerHTML = addWordInput.value
})

async function getAllWords() {
  const res = await fetch(url)
  const allWords = await res.json()

  console.log(allWords)
  allWords.forEach(el => wordToHtml(el))
}

window.addEventListener('DOMContentLoaded', getAllWords)

function wordToHtml({ id, ru, en, complete }) {
  const wordList = document.querySelector('.word-list')

  wordList.insertAdjacentHTML(
    'beforeend',
    `<div class="word-list__item item-word-list" id="word_${id}">
 			<div class="item-word-list__item item-word-list__item_ru">
 				${ru}
 			</div>
 			<div class="item-word-list__item item-word-list__item_en">${en}</div>
			 <input type="checkbox" class="word-list__check" ${complete && 'checked'} />
			 <button class="word-list__delete">X</button>
 		</div>
	`
  )
}

//<allWordsBtn>====================================================================================================
if (document.querySelector('.all-words-btn')) {
  const allWordsBtn = document.querySelector('.all-words-btn')
  allWordsBtn.addEventListener('click', function (e) {
    getAllWords()
    // allWordsBtn.setAttribute('disabled', true)
  })
}
