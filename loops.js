var arr = [ 'Ram', 'Shyam', 'krsihna' ];
var person = {
    name: 'Ram',
    age: '1000',
    address: 'saksjal',
}

for ( let name of arr ) {
    // console.log( name );
}

for ( let key in person) {
    // console.log(key + ' : ' + person[key]);
}


var keysarr = Object.keys( person );
// console.log( keysarr );


if ( 'city' in person ){
    console.log( true );
} else {
    console.log( false ); 
}
