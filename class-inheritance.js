class Employee {

    constructor( name, eid ) {
        this.name = name;
        this.eid = eid;
        this.days = 0;
    }

    attendance() {
        this.days += 1;
    }
}


class Teacher extends Employee{

    constructor( name, eid, subject ) {
        super( name, eid );
        this.subject = subject;
        this.lecture = 0;
    }

    startLecture() {
        this.lecture += 1;
        console.log( this.name + ' has started lecture no ' + this.lecture + ' of ' + this.subject );
    }
}

var teacher = new Teacher( 'Ratnesh', 12345, 'Maths');
teacher.attendance();
teacher.attendance();
teacher.startLecture();
console.log( teacher );