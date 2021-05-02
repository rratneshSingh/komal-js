function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.identity = function() {
    console.log( 'I am ' + this.name);
}

Person.prototype.showName = function() {
    console.log( this.name );
}

Person.prototype.toString = function() {
    console.log( 'Name' + this.name + ', Age' + this.age  );
}

Person.prototype.police = 100;
Person.prototype.name = 'Welcome User';

var p1 = new Person('Ram', 22);
var p2 = new Person('Shyam', 23);
// p2.speak = function() {
//     console.log('Hello ' + this.identity() );
// }

// console.log( p1.constructor == Person );
// console.log( p1.constructor == p2.constructor );
// console.log( Person.prototype.showName() );
var myfn = Person.prototype.showName;
var name = 'Ratnesh';
// p1.toString();
console.log( p1.__proto__ === Person.prototype );
console.log( p2.__proto__ === Person.prototype );
console.log( p1.__proto__ === p2.__proto__ );
p1.__proto__ = 4;
console.log( p1.__proto__ );

