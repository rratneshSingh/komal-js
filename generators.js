function* myGenFunc() {
    console.log('Hello What is your name?');
    var name = yield 8;
    console.log('Welcome ' + name );
    return 3;
}

var genObj = myGenFunc();
var res1 = genObj.next();
console.log( res1 );
var res2 = genObj.next('Ratnesh');
console.log( res2 );




