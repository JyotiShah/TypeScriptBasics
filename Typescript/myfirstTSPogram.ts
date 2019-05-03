//1. Print Hello world
console.log("hello world!!!");

//2. Let and const keyword
// In JS, variable is declared using var keyword;

// Const means constant; which cannot be changed 
const a = "Jyoti";
// a="newJyoti"
console.log("Hello "+ a);

// non asynchronous script
for(var i=0; i<5; i++){
    console.log(i);
}

// var keyword will not be handled whenever there is asynchronous nature of js
// But, in Typescript, we use let keyword and expect JS to handle it
// without let
for(var i=0; i<5; i++){
   setTimeout(function (){
       console.log(i);
   },100*1);
};

//with let 
// scope of let is at block level hence 
for(let i=0; i<5; i++){
    setTimeout(function (){
        console.log(i);
    },100*1);
 };

 