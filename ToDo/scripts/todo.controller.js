function addTodo() {
    var title = document.getElementById('todo_title');
    var description = document.getElementById('todo_description');
    TodoApp.addTodo( title.value, description.value );
    title.value = '';
    description.value = '';
    render();
}

function renderTodo() {
    var ul = document.getElementById('todo_list');
    while( ul.firstChild ) {
        ul.removeChild( ul.firstChild );
    }
    TodoApp.todos.filter( td => {
        return !td.completed;
    }).forEach( td => {
        var li = document.createElement('li');
        li.innerText = `${ td.title } - ${ td.description }`;
        var btn = document.createElement('button');
        btn.innerText = 'Mark As Done';
        btn.addEventListener( 'click', markAsDone.bind( {}, td ) );
        li.appendChild( btn );
        ul.appendChild( li );
    })
}

function renderDone() {
    var ul = document.getElementById('done_list');
    while( ul.firstChild ) {
        ul.removeChild( ul.firstChild );
    }
    TodoApp.todos.filter( td => {
        return td.completed;
    }).forEach( td => {
        var li = document.createElement('li');
        li.innerText = `${ td.title } - ${ td.description }`;
        var btn = document.createElement('button');
        btn.innerText = 'Remove';
        btn.addEventListener( 'click', removeTodo.bind( {}, td ) );
        li.appendChild( btn );
        ul.appendChild( li );
    })
}

function render() {
    renderTodo();
    renderDone();
}


function markAsDone( todo ) {
    todo.markAsCompleted();
    render();
}

function removeTodo( todo ) {
    TodoApp.removeTodo( todo.title );
    render();
}

