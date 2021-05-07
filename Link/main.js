var links = [];

function checkUrl() {
    var inputUrl = document.getElementById('inputText').value;
    var addLinkBtn = document.getElementById('addLink');
    var isFound = links.find( function ( url ) {
        return url === inputUrl;
    });
    if ( isFound ) {
        addLinkBtn.disabled = true;
    } else {
        addLinkBtn.disabled = false;
    }
}

function addLink() {
    var inputUrl = document.getElementById('inputText').value;
    links.push( inputUrl );
    document.getElementById('addLink').disabled = true;
    refreshList();
}

function refreshList() {
    var ul = document.getElementById('links');
    while ( ul.firstChild ) {
        ul.removeChild( ul.firstChild );
    }
    links.forEach( ( url ) => {
        var li = document.createElement('li');
        li.innerText = url;
        ul.appendChild( li );
    });
}

function resetAddLink() {
    var addLinkBtn = document.getElementById('addLink');
    addLinkBtn.disabled = true;
}
