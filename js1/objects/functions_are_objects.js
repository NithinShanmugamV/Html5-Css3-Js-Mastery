let myName = "Nithin"

function hi(name){
    this.name = name;
}

let hi1 = new Function('name',`
this.name = name;
`);


let msg1 = new hi("Nithin");
let msg2 = new hi1("Nithin");


console.log(msg1);
console.log(msg2);
