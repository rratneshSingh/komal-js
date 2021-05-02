var TodoApp = {
    todos: [],
    addTodo: function ( title, description ) {
        var tdMatched = this.todos.find(( td ) => {
            return td.title === title;
        });
        if ( tdMatched ) {
            alert('Title must be unique');
            return;
        }
        var todo = new ToDo( title, description );
        this.todos.push( todo );
    },
    removeTodo: function ( title ) {
        var index = this.todos.findIndex(( td ) => {
            return td.title === title;
        });
        this.todos.splice( index, 1 );
    }
}
