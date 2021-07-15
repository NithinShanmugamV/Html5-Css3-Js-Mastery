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