function hi(name,lastname){
    this.name = name;
    this.lastname = lastname;
}

hi.call({},"Nithin","Shanmugam");
let msg1 = new hi("John","S");

//hi.call(window,"Nithin","Shanmugam");
let msg2 = hi("Aravind","K");

//let msg5 = hi.apply({},["Nithin","Shanmugam"]);