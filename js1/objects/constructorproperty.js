function createStudentmarks1(maths, physics,chemistry){
    return {
        maths: maths,
        physics, //in modern js if key and value are same then we can declare property like this
        chemistry: chemistry,
        total: function() {
            console.log(
                this.maths+this.physics+this.chemistry
            );
        },
        aggregate(){
            console.log(
                this.maths+this.physics+this.chemistry
            );
        }
    };
}
let student1 = createStudentmarks1(82,75,80);
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
console.log(
    "student1.constructor(created using factory functions) : \n",
    student1.constructor
);
console.log(
    "stu1.constructor(created using constructor functions) : \n",
    stu1.constructor
);

function hi(){
    console.log("hi");
}