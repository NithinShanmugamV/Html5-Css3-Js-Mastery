console.log(
    "Earlier we have seen about objects - collection of key value pairs",
    "(property and its value). so if you have properties that are ",
    "highly related to each other, we can encapsulate them inside ",
    "an object."
);
console.log(
    "For example, Let us take student's exam results of three ",
    "subjects instead of declaring it in 3 different variables we can",
    "declare it inside an object. Obviously you can declare those ",
    "keys(properties - physics, maths...) as varibles outside object. ",
    "But it is better to follow this approach as these variables are ",
    "related to each other. we call this object orinted programming"
);
let student1Marks = {
    maths: 82,
    physics: 75,
    chemistry: 80,
    total: function() {
        console.log(
            this.maths+this.physics+this.chemistry
        );
    }
};

console.log(student1Marks);
console.log(
    "Now we can send this function anywhere, to any function as parameter. ",
    "You can use let or const to declare object (if you don't want to ",
    "change property use const else use let). curly braces is calles object ",
    "literal. 'let marks = {}' is object literal syntax which is empty. "
);
console.log(
    "Value of key can be any type string, num or even arrays function ",
    "or may be another object."
);
console.log(
    "Idea of an object is to group variables together. ",
    "Sometimes there are functions which are related to these variables ",
    "and perform operations. You can also declare them inside object. ",
    "You can also call these varibles and functions using dot notation."
);
console.log("We call functions inside object as methods");
console.log(
    "Suppose we have to create an object for storing marks of 10 students. ",
    "We will create an object using above method. But the above code is ",
    "not efficient if we have more properties and if there is a bug we ",
    "have to fix on all 10 objects."
);
console.log(
    "We can overcome this problem by factory and constructor functions"
);
console.log(" ");console.log(" ");

console.log("Factory Functions: ");
console.log("We use camel notation for naming these functions");

function createStudentmarks(maths, physics,chemistry){
    let student1Marks = {
        maths: maths,
        physics: physics,
        chemistry: chemistry,
        total: function() {
            console.log(
                this.maths+this.physics+this.chemistry
            );
        }
    };
    return student1Marks;
}
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
        /*
        aggregate is also a method like total.
        It looks like how we used to declare function 
        outside object like function name{return 1;}
        but as it is declared inside object u can remove
        function keyword when definning it.
        */
    };
}

//now we can call this by following way
let student1 = createStudentmarks1(82,75,80);
let student2= createStudentmarks1(82,80,75);
console.log(student1, student2);

//constructor function
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
