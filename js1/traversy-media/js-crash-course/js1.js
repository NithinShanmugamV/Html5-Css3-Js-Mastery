function part1() {
    console.clear();
    console.log("array of objects");

    const arr = [{
            id: 1,
            Name: "Nithin",
            age: 20
        },
        {
            id: 2,
            Name: "Shanmugam",
            age: 20
        },
        {
            id: 3,
            Name: "Nithin Shanmugam",
            age: 25
        }
    ];

    console.log(arr);
    console.log("");
    console.log("");
    const todoJSON = JSON.stringify(arr);
    console.log(todoJSON);

    console.log("");
    console.log("");
    const loop = (arr) => {
        for (let iterator of arr) {
            console.log(`Name of ${iterator}  ${iterator.id} is ${iterator.Name}`);
        }
    }

    console.log(loop);
    console.log(loop(arr));
    console.log("");
    console.log("");

    console.log("ForEachMethod");

    function forEachMethod(arr) {
        arr.forEach(
            (iterator) => {
                console.log(`Name of object ${iterator.id} is ${iterator.Name}`)
            }
        );
    }



    console.log(forEachMethod);
    console.log(forEachMethod(arr));
    console.log("");
    console.log("");

    console.log("Map Method");
    const mappedArr = arr.map(function(iterator) {
        return iterator.Name;
    });
    console.log(mappedArr);
    console.log("");
    console.log("");

    console.log("Filter Method");
    let fileteredArr = arr.filter((iterator) => {
        return iterator.age === 20;
    });
    console.log(fileteredArr);
    fileteredArr = arr.filter((iterator) => {
        return iterator.age === 20;
    }).map(function(iterator) {
        return iterator.Name;
    });
    console.log(fileteredArr);
}

function part2(){
    console.clear();
    console.log("constructor functions");
    function Person(name,age,dob) {
        this.name = name;
        this.age = age;
        this.dob = new Date(dob);
    }
    Person.printName = function() {
        console.log(`Full name of Student is ${this.name}`);
    }
    const student1 = new Person("Nithin",20,'09-14-2001');
    console.log("To add methods you can either use prototypes or just add in constructor function");
    Person.prototype.getBirthYear= function() {
        return this.dob.getFullYear();
    }
    
    console.log(student1);
    console.log("");
    console.log("");

    console.log("ES6 classes");
    class PersonClass {
        constructor(name,age,dob){
            this.name = name;
            this.age = age;
            this.dob = new Date(dob);
        }
        printName() {
            console.log(`Full name of Student is ${this.name}`);
        }
        getBirthYear= function() {
            return this.dob.getFullYear();
        }
    }
    const student2 = new PersonClass("Nithin V",20,'01-01-2001');
    console.log(student1);
    console.log("If you look at console, by default methods are added to prototypes")
}