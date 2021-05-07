var arrLiteral = [ 'Ram', 'Shyam', 'Ramesh', 'Suresh', 'Geeta' ]; // array literal - []
var arrObject = new Array( 1, 2, 3, 4, 5 ); // arr object


var str = arrLiteral.toString();
// console.log( Array.prototype.toString );
// console.log( str );

// console.log( Object.prototype.toString.call( arrLiteral) );

var newArr = [ 1,2,3, ];

var p = arrLiteral.slice( 1, 4 );
// console.log( arrLiteral );
// console.log( p );

Array.prototype.myConcat = function ( secondArray ) {
    var finalArray = [];

    for( var i = 0; i < this.length; i++ ) {
        finalArray.push( this[i] );
    }

    for( var i = 0; i < secondArray.length; i++ ) {
        finalArray.push( secondArray[i] );
    }

    return finalArray;
}
var result = arrLiteral.sort( function ( a, b ) {
    return a.length - b.length;
});
// console.log( result );
// console.log( arrLiteral );

function Person( name, age, salary ) {
    this.name = name;
    this.age = age;
    this.salary = salary
}

Person.prototype.toString = function() {
    return this.name;
}


var arrPerson = [
    new Person( 'Ram', 16, 5000 ),
    new Person( 'Shyam', 26, 10000),
    new Person( 'Ramesh', 22, 6000 )
];


var arrResult = arrPerson.sort( function (a,b) {
    return a.salary - b.salary;
});
// console.log( arrResult );
// console.log( arrPerson  );


// var result = arrPerson.map( function ( item ) {
//     return item.name;
// });

var result = arrPerson.some( function ( item ) {
    return item.age < 16;
});
// console.log( result );


var persons = [
    {
        name: 'Ram',
        age: 22
    },
    {
        name: 'Shyam',
        age: 23
    },
    {
        name: 'Ramesh',
        age: 25
    }
];

//result: {
//     name: '',
//     totalAge: 0,
//     avgAge: 0 
// }

var result = persons.reduce( function ( acc, item, index ) {
    acc[0] += item.name;
    acc[1] += item.age;
    acc[2] = ( acc[1] / ( index + 1 ) );
    return acc;
}, [ '', 0, 0 ] );


// var result = persons.map( function( item ) {
//   return item.name.length;
// });

var result = persons.reduce( function ( acc, item ) {
    acc.push( item.name.length );
    return acc;
}, [] )
console.log( result );

