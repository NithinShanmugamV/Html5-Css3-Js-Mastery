let name;
console.log(name);
let name1 = 'Nithin';
console.log(name1);
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

console.log(typeof (prType1)) //string
console.log(typeof (prType2)) //number
console.log(typeof (prType3)) //boolean
console.log(typeof (prType4)) //undefined
console.log(typeof (prType5)) //object

/*
refernce type has 3 types objects,array,functions
*/

/*
Object is similar like object in real life. Think of a person as object and his name, age, address will be property of person object
*/

let objectExample = {}; //object literal
let person = {
    name: 'Nithin',
    age: 20
};

console.log(person);

/*
There are two ways to access or change the value of property in object
*/

//DOT NOTATION
person.name = "Nithin V";
//We can read value using dot notation
console.log(person.name)// reading the value

//BRACKET NOTATION
person["age"] = 19;
console.log(person['age']);

/*
When to use which notation
normally if the program is simple we can use dot notation

however at time of writing code, if u don't know what property to access use bracket notation. Example
*/

selection = "name";
console.log(person[selection]);
selection = "age";
console.log(person[selection]);