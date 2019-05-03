// Contructor rules:
// If you do not declare constructor - default constructor will be called 
// Parameterized constructor is allowed
// Only one constructor is allowed per class ie multiple constructor implementations not allowed
// Constructor will always be called 1st

class classConstDemo{
usr:string

// parameterized constructor
    constructor(usr){
            console.log(this.usr=usr);
    }

    // constructor(usr){

    // }
}

let obj = new classConstDemo("This is parameterized constructor example");
// console.log(obj);
