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