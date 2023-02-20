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