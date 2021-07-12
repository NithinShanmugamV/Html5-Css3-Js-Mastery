console.log("Factory Functions: ");
console.log("We use camel notation for naming these functions");

function createStudentmarks(maths, physics,chemistry){
    let student1Marks = {
        maths: maths,
        physics: physics,
        chemistry: chemistry,
        total: function() {
            console.log(
                this.maths+this.physics+this.chemistry
            );
        }
    };
    return student1Marks;
}
function createStudentmarks1(maths, physics,chemistry){
    return {
        maths: maths,
        physics, //in modern js if key and value are same then we can declare property like this
        chemistry: chemistry,
        total: function() {
            console.log(
                this.maths+this.physics+this.chemistry
            );
        },
        aggregate(){
            console.log(
                this.maths+this.physics+this.chemistry
            );
        }
        /*
        aggregate is also a method like total.
        It looks like how we used to declare function 
        outside object like function name{return 1;}
        but as it is declared inside object u can remove
        function keyword when definning it.
        */
    };
}

//now we can call this by following way
let student1 = createStudentmarks1(82,75,80);
let student2= createStudentmarks1(82,80,75);
console.log(student1, student2);
