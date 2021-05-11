var obj = {
    name: 'Ram',
    show: function () {
        var innerObj = {
            name: 'Shyam',
            arrFunc: () => {
                console.log(this.name);
            },
            innershow: function () {
                console.log(this.name);
            }
        }
        innerObj.arrFunc();
        innerObj.innershow();
    }
}

// obj.show();

var arrFunc = () => 6;
 var num = arrFunc();


console.log( num );