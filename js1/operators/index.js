console.log("arithmetic operators: a is 5, b is 2");
let a = 5; 
let b = 2;
console.log(
    "addition: ",a+b,
    "subtraction: ",a-b,
    "multiplication: ",a*b,
    "division: ",a/b,
    "remainder operator: ",a%b,
    "exponential operaor: ",a**b
);
console.log("Here addition, subtraction, multiplication, division, remainder and exponential operator is operators. a and b are operands");
console.log("Increment operator: ");
console.log("pre-increment: ",++a);
a = 5;
console.log("post-increment: ",a++);
console.log("Decrement operator: ");
a = 5;
console.log("pre-decrement: ",--a);
a = 5;
console.log("post-decrement: ",a--);
console.log(" ");console.log(" ");

console.log("assignment operator: =");
let x = 5;
console.log("value of x is: ",x);
x += 1;
console.log("addition assignment operator: +=","value of x when added 1 to it: ",x);
x -= 1;
console.log("subtraction assignment operator: -=","value of x when 1 is subtracted from it: ",x);
x *= 5;
console.log("multiplication assignment operator: *=", "value of x when 5 is multiplied to it: ",x);
x /= 5;
console.log("division assignment operator: /=", "value of x when 5 id divided to it: ",x);
x %= 2;
console.log("remainder assignment operator: %=","remainder of x when it is divided by 2: ",x);
x = 5;
x **= 3;
console.log("exponential assignment operator: /=", "cube value of 5 : ",x);
console.log(" ");console.log(" ");

console.log("comparision operators: ");
console.log("relational operators: >, >=, <, <=");
console.log("5 greater than 4",5 >4);
console.log("5 greater than or equal to 4",5 >= 4);
console.log("5 greater than or equal to 5",5 >= 5);
console.log("5 less than 6",5<6);
console.log("5 less than or equal to 6",5 <=6);
console.log("5 less than or equal to 5",5 <=5);
console.log(" ");console.log(" ");

console.log("equality operators: ");
console.log("Strict equality checks for both type and value whereas loose equality check only value");
console.log("comparing string type 4 with number type 4 with strict equality",'4'===4);
console.log("comparing string type 4 with number type 4 with loose equality",'4'==4);
console.log("what if we compare boolean with number");
console.log(
    "let us use loose equality to compare true with 1. In programming languages 0 is seen as false and rest all other numbers are seen as true. ",
    "As loose equality only checks for values not types, it converts type what we have in right side to type what we have in left side. ",
    "So, 1 is coverted to true and when compared we get: ",
    true == 1
);
console.log("using loose equality to compare true with 0: ", true ==0);
console.log("using strict equality to compare true and 1: ",true ===1);