function ToDo( title, description ) {
    this.title = title;
    this.description = description;
    this.completed = false;
}

ToDo.prototype.markAsCompleted = function () {
    this.completed = true;
}