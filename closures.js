function show() {
    var a = 7; 
    function print() {
        console.log(a);
    }
    return print;
}

var myprintfn = show();
// console.log(a);
myprintfn();

// globalScope => show - (fn1), myprintfn -> (undefined) -> fn2;
// run -> 

// fn1Scope -> a -> undefined -> 7, print -> fn2
// run

// fn2Scope -> 
// run -> 


// Example: 

// function a() {

//     var name = 'Ratnesh';

//     setTimeout(function(){
//         console.log(name);
//     }, 1000);
//     console.log('Welcome');
// }
// a();

// globalScope -> a ->(fn1)
// run => 

// fn1Scope => name -> undefined -> 'Ratnesh'
// run -> eventLoop(func) -> timerApi -> chrome -> V8(JSEngine)

// Example

// for(var i = 0; i < 10; i++) {

//     setTimeout( function() {
//         console.log(i);
//     });

// }


// globalScope -> i => undefined -> 0 -> 1 -> 2 -> 3 .... 9 -> 10
// run

// eventLoop -> fn1 -> fn2 -> fn3 -> fn4 ..... fn10

// fn1Scope => 
// run => 10

// fn2Scope => 
// run => 10
// .... fn10 => 10