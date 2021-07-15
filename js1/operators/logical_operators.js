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