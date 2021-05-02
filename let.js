// var vs let vs const

// var -> scope => functional / global
// let -> scope => block
// const -> scope => block

// var -> hoist -> compile me register ho jata h
// let / const -> do not hoist -> compile me register nhi hote h

// Example

// console.log(a);
// console.log(b);
// var a = 10;
// let b = 20;


// globalScope -> C// -> a -> undeined
// run -> undefined - ref error

// Example

// if (true) {
//     var a = 10;
//     let b = 20;
//     console.log(a);
//     console.log(b);
// }

// console.log(a);
// console.log(b);

// globalScope -> C// -> a -> undefined -> 10
// run-> 
// ifBlockScope -> b -> 20 -> destroy

// 10
// 20
// 10
// ref error


