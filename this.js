// this -> keyword

// this -> object

// this -> object -> obj

// var obj = {
//     a: function (val, val1) {
//         console.log(this, val, val1);
//     }
// }
//  var t = obj.a;
//  t();
//  obj.a();
//  var newObj = {
//      schoolName: 'SJA',
//      address: 'Prayagraj'
//  }
//  t.call(newObj, 10, 78);
// t.apply(newObj, [ 10, 78 ]);
// var k = t.bind(newObj);

// k(10, 78);

// this ki value depend karti call sight

// Function call => myFun(), myFun.call(newObj), myFun.apply(), myFun.bind()

// Arrow Function
