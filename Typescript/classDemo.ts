// A class consists of properties, methods and constructor
// varaibles
let uname:string; //notice this is variable is having let keyword
let pwd:string;

export class classDemo{

    // properties
    username:string; //this is property with no let keyword
    password:string;
    
    // method
    constructor(){
        console.log("In Constructor");
    }

    getUserName(){
        return this.username;  //returns username property of class
    };

    setUserName(uname){
        this.username=uname;
    }

    getPassword(){
        return this.password;  //returns username property of class
    };

    setPassword(pwd){
        this.password=pwd;
    }

}

// call class using object of class
let classDemoObj = new classDemo();
classDemoObj.setUserName("Jyoti");
let nm = classDemoObj.getUserName();
console.log(nm);