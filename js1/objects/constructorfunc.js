console.log("we use pascal notation for constructor function");
function StudentMarks(physics, chemistry, maths){
    this.physics = physics;
    this.chemistry = chemistry;
    this.maths = maths;
    this.greeting = function(){
        console.log('hi');
    };
    this.aggregate = function() {
        return (this.physics/2)+(this.chemistry/2)+this.maths;
    };
}
let stu1 = new StudentMarks(75,80,82);
console.log(stu1.greeting());
console.log(stu1.aggregate());
const myName = {
    firstname: 'Nithin'
};
console.log(myName);
myName.secondname = 'Shanmugam';
console.log(myName);
delete myName.firstname;
console.log(myName);
