const form = document.querySelector('.js-todoForm'),
  todoInput = form.querySelector('input'),
  todoList = document.querySelector('.js-todoList');

const todos = [];


function showTodos(value){
  const li = document.createElement('li');
  const span = document.createElement('span');
  const delBtn = document.createElement('button');
  delBtn.innerText = '❌';  
  span.innerText = value;
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);
  const todoObj = {
    text: value,
    id: todos.length + 1
  };
  todos.push(todoObj);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  showTodos(currentValue)
  todoInput.value = '';
}

function init(){
  form.addEventListener('submit', handleSubmit);
}

init();