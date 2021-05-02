var a = 10;

function show() {
    var a = 7; //5
    function print() {
        a = 5;
        console.log(a);
    }
    print();
    console.log(a);
}
show();
console.log(a);

