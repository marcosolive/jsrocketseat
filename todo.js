var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


function renderTodos() {
    listElement.innerHTML='';
    for (todo of todos) {
        var todoElemente = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        linkElement.setAttribute('href','#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        linkElement.appendChild(linkText);

        todoElemente.appendChild(todoText);
        todoElemente.appendChild(linkElement);

        listElement.appendChild(todoElemente);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;


function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
}

function saveToStoreage () {
    
    localStorage.setItem('list_todos', JSON.stringify (todos));
}