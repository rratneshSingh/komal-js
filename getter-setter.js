function Loan( accNumber,amount, time ) {
    this.accNumber = accNumber;
    this.amount = amount;
    this.time = time;
    Object.defineProperty( this, 'interest', {
        value: 7,
        writable: true,
        enumerable: true
    })
    this.calcInterest = function() {
        return this.amount * ( interest / 100 ) * this.time;
    } 
}

Loan.prototype.message = 'Welcome';


var loan = new Loan( 12345, 100000, 2 );
loan.interest = 6;
console.log( loan.interest );

for ( let key in loan ) {
    console.log( key + ':' + loan[key] );
}

