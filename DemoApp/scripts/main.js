var products = [
    new Product( 'Redmi Note 8', 1000, 8000, 'https://www.gizmochina.com/wp-content/uploads/2019/09/Xiaomi-Redmi-Note-8-1-500x500.jpg' ),
    new Product( 'Redmi Note 9', 1000, 8000, 'https://www.gizmochina.com/wp-content/uploads/2019/09/Xiaomi-Redmi-Note-8-1-500x500.jpg' ),
    new Product( 'Redmi Note 10', 1000, 8000, 'https://www.gizmochina.com/wp-content/uploads/2019/09/Xiaomi-Redmi-Note-8-1-500x500.jpg' ),
    new Product( 'Redmi Note 11', 1000, 8000, 'https://www.gizmochina.com/wp-content/uploads/2019/09/Xiaomi-Redmi-Note-8-1-500x500.jpg' ),
];


function refreshItems() {
    var div = document.getElementById('item-list');
    var card = document.getElementById('item');
    products.forEach( product => {
        let c = card.cloneNode( true );
        let h5Title = card.getElementsByClassName('card-title')[0];  
        h5Title.innerText = product.name;
        let img = c.getElementsByClassName('card-img-top')[0]; 
        img.src  = product.img;
        div.appendChild( c );
    });
}

refreshItems();