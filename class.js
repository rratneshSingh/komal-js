class Person {

    constructor( name ) {
        this.name = name;
    }

    showName() {
        console.log( this.name );
    }

    static welcome() {
        console.log('Welcome');
    }
}


// function Person( name ) {
//     this.name = name;
// }

// Person.prototype.showName = function() {
//     console.log( this.name );
// }

var p = new Person('Ratnesh');
console.log( Person.welcome() );