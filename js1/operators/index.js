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
console.log(" ");console.log(" ");

console.log("ternary operators: ");
console.log(
    "This operator makes the if-else conditions much simpler",
    "Let's consider an example, we take a customer and check his ",
    "eligibility to vote if he is above 18 and if he is then save yes ",
    "in another variable else save no"
);
let age = 20;
let eligibility = age > 18 ? 'yes' : 'no';
console.log(
    "Now 'let age = 20;' we have declared and initialed age variable",
    "Now declare eligibility variable. This is how ternary operator works: ",
    "'elgibility = age > 18 ? 'yes' : 'no';'. Here if age is greater than ",
    "18 then it saves yes else no. Now let us print eligibility",eligibility
);
console.log(" ");console.log(" ");

console.log("logical operators: ");
console.log(
    "Logical AND (indicated by two ambersand) returns true if both ",
    "operands are true if anyone operand is false then we get false ",
    "Example: true&&true: ",true&&true,"true&&false: ",true&&false
);

console.log(
    "Logical OR (indicated by two vertical slash) returns true if one ",
    "operand or both operands are true if both operands are false ",
    "then we get false ", "Example: true||true: ",true||true,
    "true||false: ",true||false,"false||false: ",false||false
);

console.log(
    "Logical NOT (indicated by exclamation mark) returns true if operand ",
    "is false and returns false if operand is true.",
    "Example: !true: ",!true," !false: ",!false
);
console.log(" ");console.log(" ");

console.log("logical operators with non-boolean values: ");
console.log(
    "All these time we have compared two boolean values. ",
    "What happens if we compare boolean with non-boolean values.",
    "For example: false || 'Nithin': ",false || 'Nithin',
    "false || 1: ",false || 1,"true || null: ",true || null,
    "How are these values compared?"
);
console.log(
    "In JS, if we don't compare two boolean values, then js used to ",
    "interpret something called truthy or falsy. Note they are not ",
    "boolean true or false."
);
console.log("Falsy values: undefined, null, '', 0, false, NaN");
console.log("Anything that is not falsy is truthy");
console.log(
    "false || 'Nithin': ",false || 'Nithin',
    "Well left side is false, right side is truthy ",
    "So, false || truthy is truthy as it is or", 
    "operation which require either operand ",
    "to be true and truthy value is ",
    "'Nithin'. So we get Nithin as output."
);
console.log(
    "false && 1: ",false && 1,
    "Well left side is false, right side is truthy ",
    "So, false && truthy is false as it is and", 
    "operation which require both operand ",
    "to be true and falsy value is ",
    "'false'. So we get false as output."
);
console.log(" ");console.log(" ");

console.log("bitwise operator: ");
console.log(
    "Every number or string is stored in binary formats in computer. ",
    "So to perform operations on individual bits we use these operators."
);
console.log("1 | 2 : ",1 | 2);
console.log(
    "How did we get three? Well binary format of 1 is 00000001 and ",
    "binary format of 1 is 00000010. When we compare with bitewise or ",
    "it performs logical or operations in each digits. This means ",
    "both of the variables have 0 as first 6 digits as 0. So 0 || 0 is 0",
    "7th digit of 1 is 0 and 2 is 1 so, 0||1 is 1 and ",
    "8th digit of 1 is 1 and 2 is 0 so, 0||1 is 1. Now our answer is ",
    "00000011. This is nothing but binary equivalent of 3."
);
console.log("Bitwise OR: |. Bitwise AND: &");
console.log(
    "Let us look at a real world example. Say there are 3 team ",
    "in your company developer, planning, marketing team. If you ",
    "can access that particular team resource you need permission. ",
    "Let's us consider 1 as permission granted and 0 as permission denied.",
    "So we have 8 binary digits in which 6th digit represent permission ",
    "given to devloper team, 7th represent permission given to planning ",
    "team and 8th represent marketing team. If you have permission to ",
    "access developer team resource then 00000001 which is 1. Similarly for ",
    "planning and marketing we represent 00000010 and 00000100 which is",
    "2 and 4 in decimal format"
);
console.log(
    "Now you need to give permission to a new employee who needs access ",
    "to both developer and planning team."
);
const developerPermission = 1;
const planningPermission = 2;
const marketingPermission = 4;
let myPermission = 0;
myPermission = myPermission | developerPermission
console.log(
    "myPermission = myPermission | developerPermission. ",
    " This gives devloperPermission."
);
myPermission = myPermission | planningPermission
console.log(
    "myPermission = myPermission | planningPermission. ",
    " This gives planningPermission."
);
let message1 = (myPermission & developerPermission) ? "You have developer permission":"You have no developer permission";
let message2 = (myPermission & planningPermission) ? "You have planning permission":"You have no planning permission";
let message3 = (myPermission & marketingPermission) ? "You have marketing permission":"You have no marketing permission";
console.log("Now let us check what are all the permission granted.");
console.log(message1," ",message2," ",message3);
console.log(
    "How did i do this : message1 = (myPermission & developerPermission) ?",
    "'You have developer permission':'You have no developer permission';"
);
console.log(" ");console.log(" ");

console.log("operator precedance: ");
console.log("Visit this website: ","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence");