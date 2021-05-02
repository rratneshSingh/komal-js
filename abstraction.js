function Loan( accNumber,amount, time ) {
    this.accNumber = accNumber;
    this.amount = amount;
    this.time = time;
    let interest = 7;
    this.calcInterest = function() {
        return this.amount * ( interest / 100 ) * this.time;
    } 
}

var loan = new Loan( 12345, 100000, 2 );
loan.interest = 3;
console.log( 'Your Interest is: ' + loan.calcInterest() );
