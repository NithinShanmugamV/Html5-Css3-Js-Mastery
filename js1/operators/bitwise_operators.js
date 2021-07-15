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
