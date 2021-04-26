 let comerabrand = 'Canon';//variableName= values
 let comeraPrice = 35000;
 let comeracolor = 'black';
// instend of this many variable we can club or group all into a single variable object

let camera ={
    brand : 'Canon',
    price : 35000,
    color : 'black',
    mfg : 2019

};
console.log(camera);

//access the properties of an object
console.log(camera.brand);
console.log(camera.price);
console.log(camera.color);

//access the non existing property
console.log(camera.megaPixcel);// undefined

//access the properties using dot ,[] notation
console.log(camera.price); //35000
console.log(camera['price']);//3500 pass as string
/*
dot for static properties

[] dynamic properties
*/

//for dynamic properties dot, [] notation
let prop ='color';
console.log(camera.prop); // undefined 
//here we are giving but it is not present in object as prop  property
// u will never access dynamic property using dots only 

console.log(camera[prop]);//black 
//dynamically prop given
// dynamic properties can only accessed using [] brackets

// Nested Object
let student ={
    name :'Arjun Reddy',
    age  : 23,
    course : 'MBBS',
    address : {// add can contain int char string all so it is one object
                street : 'Jubilee Hills',
                city : 'Hyderabad',
                state : 'TS'
    }
};
// access an object
console.log(student);

//access the nested object
console.log(student.address);

//access the properties of an object
console.log(student.address.street);


//CURD Operation with an Object
// create operation

let laptop ={};

laptop.brand = 'HP';
laptop.color = 'Silver';
laptop.price = 39000;
laptop.isInsured =false;
console.log(laptop);

//READ Operation
console.log(laptop.brand); // HP

//update Operation
console.log(laptop.price);//39000
laptop.price =45000;
console.log(laptop);

//delete Operation

delete laptop.isInsured;
console.log(laptop);




