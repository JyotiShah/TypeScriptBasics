// Object and properties of object

let obj = {
    model:"verna",
    colour:"red",
    engine:1600
}
// console.log(obj.engine);

// Interface defines contract of object; it defines how your object should be like.
// If mandatory contracts are not implemented than error would be thrown
// Optional contracts are defined using ? before interface parameter/property

interface vehicle{
    model:string,
    engine:number,
    brake:boolean,
    colour?:string
}

let alto = {
    model:"LXI",
    engine:799,
    brake:true,
    // colour:"red"
}

// Function to validate interface implementation
function validateCar(car:vehicle){
    console.log(car.engine+" - "+car.model+" - "+car.brake +" - "+car.colour) ;
}

// Verify 
validateCar(alto);

// using typing while declaring an interface object
let i20:vehicle = {
    model:"petrol",
    engine:1600,
    brake:true,
    colour:"white"
}