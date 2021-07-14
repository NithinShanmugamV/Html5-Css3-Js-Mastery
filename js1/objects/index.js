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


