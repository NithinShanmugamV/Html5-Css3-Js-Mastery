let name;
console.log("printing value of declared, non-initialised variable: ",name);
let name1 = 'Nithin';
console.log("printing value of variable: ",name1);
/*
RULES FOR NAMING VARIABLES.

SHOULD NOT BE KEYWORDS, SHOULD BE MEANINGFUL, SHOULDN'T START WITH A NUMBER, NO SPACE OR HYPHEN IN B/W
*/

const pi = 3.14; //value cannot be changed, throws an err when u try to change

/*
what are the values that can be assigned to a variable. There are two types
primitive and reference type
Primitive/Value type. Is divided it into 6 types
*/


let prType1 = "Nithin"; // string literal
let prType2 = 8; // number literal
let prType3 = true; // boolean literal
let prType4 = undefined; // not initialing a variable is also cosidered nu
let prType5 = null; // null is used explicity used to clear values stored in variable.
// 6th primitive is called symbol which is introduced in es6. we will learn abt this.

console.log("primitive types in js : ",typeof (prType1),", ", typeof (prType2),", ", typeof (prType3),", ", typeof (prType4),", ", typeof (prType5))
console.log(" ");console.log(" ");

/*
refernce type has 3 types objects,array,functions
Object is similar like object in real life. Think of a person as object and his name, age, address will be property of person object
*/

let objectExample = {}; //object literal
let person = {
    name: 'Nithin',
    age: 20
};
console.log("printing object properties: ");
console.log(person);


console.log("There are two ways to access or change the value of property in object: ");


//DOT NOTATION
person.name = "Nithin V"; //We can read value using dot notation
console.log("1. Changing name property value using dot notation(person.name): ",person.name);// reading the value


//BRACKET NOTATION
person["age"] = 19;
console.log("2. Changing age property value using bracket notation(person[\"age\"]): ",person['age']);
console.log(" ");console.log(" ");


console.log(
    "When to use which notation. Normally if the program is simple we can use dot notation",
    " however at time of writing code, if u don't know what property to access use bracket notation. Example"
);
selection = "name";
console.log("using same variable selection in bracket notation to print properties")
console.log("when selection var is name: ",person[selection]);
selection = "age";
console.log("when selection var is age: ",person[selection]);
console.log(" ");console.log(" ");

console.log(
    "Sometimes you will be dealing with list of objects like, list of items in shopping cart, list of colours available.",
    "There we will use array."
);


let selectedColours = ['red','blue'];
console.log("printing array ",selectedColours,selectedColours[0],selectedColours[1]);

console.log(
    "Unlike other programming langs, Arrays in js doesn't need you mention length of array as js is dynamic.",
    "also type of objects in array in dynamic which means you can have various types in array."
);

selectedColours[2] = 'green';
selectedColours[3] = 19;
selectedColours[4] = null;
selectedColours[5] = [19,25,30];
console.log("adding elements in array", selectedColours);


console.log("type of array: ",typeof selectedColours);
console.log(
    "well technically array belongs to object type. Then what are its properties. It inherits some properties like length, index",
    "that is used to perform operation in these arrays."

);
console.log(selectedColours.length);
console.log("");console.log("");

//FUNCTIONS
function greet0(arr){
    console.log("function call, print 3rd element of array: ",arr[2]);
}

greet0(selectedColours);
//in function declaration function is a keyword, greet is name of function and arr is a parameter

console.log(
    "what happens if we have defined two parameters in function but only pass one parameter.",
    "well it doesn't throw error but prints undefined."
);

function greet(color1, color2){
    console.log(color1,color2);
}

greet(selectedColours[0]);
greet(selectedColours[0],selectedColours[1]);
console.log(" ");console.log(" ");

console.log("The above function doesn't return anything. It just performs the task. We also can have function that returns a value");
function sq(number){
    return number * number;
}
console.log("Square of number 5 is: ",sq(5));