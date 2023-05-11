const form = document.querySelector('form')
const input = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const deleteAllBtn = document.querySelector('#delete-all-btn')

// Add event listener to form submit
form.addEventListener('submit', e => {
  e.preventDefault()
  const todoText = input.value.trim()
  if (todoText !== '') {
    const todoItem = createTodoItem(todoText)
    todoList.appendChild(todoItem)
    input.value = ''
  }
})

// Add event listener to delete all button
deleteAllBtn.addEventListener('click', () => {
  const todoItems = todoList.querySelectorAll('li')
  todoItems.forEach(item => item.remove())
})

// Create a new todo item element
const createTodoItem = (text) => {
  const li = document.createElement('li')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.addEventListener('change', toggleTodoItem)
  const span = document.createElement('span')
  span.textContent = text
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Delete'
  deleteBtn.addEventListener('click', deleteTodoItem)
  li.appendChild(checkbox)
  li.appendChild(span)
  li.appendChild(deleteBtn)
  return li
}

// Toggle the completed state of a todo item
const toggleTodoItem = () => {
  const li = this.parentNode
  if (this.checked) {
    li.classList.add('completed')
  } else {
    li.classList.remove('completed')
  }
}

// Delete a todo item
const deleteTodoItem = () => {
  const li = this.parentNode
  li.remove()
}
