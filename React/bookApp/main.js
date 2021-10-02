class Book {

    constructor(title, author, publication, price) {
        this.id = null;
        this.title = title || '';
        this.author = author || '';
        this.publication = publication || '';
        this.price = price || 0;
    }
}

class BookList {

    constructor() {
        this.list = [];
        this.lastIndex = 0;
    }

    addBook( title, author, publication, price ) {
        const book = new Book( title, author, publication, price );
        book.id = ++this.lastIndex;
        this.list.push( book );
        return book;
    }
}

var bookList = new BookList();




