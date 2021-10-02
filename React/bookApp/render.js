const table = document.getElementById('tbody');

function addRow() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publication = document.getElementById('publication').value;
    const price = document.getElementById('price').value;
    
    const book = bookList.addBook( title, author, publication, price);

    const trEle = document.createElement('tr');
    for( let key in book ) {
        const td = document.createElement('td');
        td.innerHTML = book[ key ];
        trEle.appendChild( td );
    }
    table.appendChild( trEle );
}