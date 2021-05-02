Function.prototype.pie = 3.14;

function Employee( name, eid ) {
    this.name = name;
    this.eid = eid;
    this.days = 0;
}

console.log( Employee.constructor );

Employee.prototype.attendance = function() {
    this.days += 1;
}

var emp = new Employee( 'Ratnesh', 1234567 );

var newObj = Object.create( Employee.prototype );
Teacher.prototype = newObj;
newObj.constructor = Teacher;

function Teacher( name, eid, subject ) {
    Employee.call( this, name, eid  );
    this.subject = subject;
    this.lecture = 0;
}

Teacher.prototype.startLecture = function() {
    this.lecture += 1;
    console.log( this.name + ' has started lecture no ' + this.lecture + ' of ' + this.subject );
}

var teacher = new Teacher( 'Ratnesh', 12345, 'Maths' );

teacher.startLecture();

// setTimeout(()=>{
//     teacher.startLecture();
//     console.log( teacher );
// }, 5000);

console.log( teacher );
console.log( teacher.attendance() );
console.log( teacher.constructor );
console.log( emp.constructor );


