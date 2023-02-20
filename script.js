// Seleccionar elemento con ID
const title = document.getElementById('main-title')

function cambiarTexto() {
    title.textContent = 'nuevo texto'
}

function cambiarColor() {
    title.style.color = 'red'
}

function cambiarClase() {
    // title.className = 'textos-importantes'
    title.classList.add('textos-importantes')
    console.log(title.classList)
}

// Seleccionar Elementos con clase
const listItems = document.getElementsByClassName('list-item')
console.log(listItems)

listItems[0].style.color = 'red'

// Seleccionar con cualquier selector de css
const elementoAzul = document.querySelector('.azul')
const segundoItem = document.querySelector('#ejemplo-texto')

function cambiarElementoAzul() {
    elementoAzul.style.color = 'magenta'
}

function cambiarEjTexto() {
    segundoItem.textContent = 'Texto Cambiado'
}

/// interacciones

const inputTask = document.getElementById('input-task')
const todoList = document.getElementById('todo-list')

function agregarItem() {

    if(todoList.children.length === 5) {
        const listItem = document.createElement('li')
        listItem.textContent = 'Solo se pueden agregar 5 elementos'
        listItem.style.color = 'red'
        todoList.append(listItem)
        inputTask.value = ''
    }

    if (inputTask.value && inputTask.value !== '' && inputTask.value !== ' ' && todoList.children.length < 5) {
        const listItem = document.createElement('li')
        listItem.textContent = inputTask.value
        todoList.append(listItem)
        inputTask.value = ''
    }

}

//// Inner HTML
const card = document.createElement('article')
card.className = 'row'

const imgUrl= 'https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_960_720.png'

card.innerHTML = `<div class="col s3">
<div class="card">
  <div class="card-image">
    <img src="${imgUrl}">
    <span class="card-title">Card Title</span>
  </div>
  <div class="card-content">
    <p>I am a very simple card. I am good at containing small bits of information.
    I am convenient because I require little markup to use effectively.</p>
  </div>
  <div class="card-action">
    <a href="#">This is a link</a>
  </div>
</div>
</div> `

const cardsContainer = document.getElementById('cards-container')
cardsContainer.append(card)


/// getAttribute & setAttribute
function cambiarAttr(clickedCard=card, imageLink = 'https://coolhuntermx.com/wp-content/uploads/2019/03/feliz.jpg'){

    const cardImg = clickedCard.querySelector('.card-image img')
    console.log(cardImg.getAttribute('src'))
    cardImg.setAttribute('src', imageLink)


}

/// Event listeners
const cardBtn = document.querySelector('.card-action button')
const eventCard= cardBtn.parentElement.parentElement
cardBtn.addEventListener('click', () => cambiarAttr(eventCard, 'https://as2.ftcdn.net/v2/jpg/04/31/82/57/1000_F_431825797_gbFmyO0sBt29VljKwxyYxDjcV5oJCHzi.jpg'))

/// Array, spread operators, clone objects