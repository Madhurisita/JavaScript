/* JavaScript Functions
---------------------------
-> its a block of statements which taken in a set parameters and 
does some process and returns the result.
->Re-usability
*/

//print from 0 -10 diff 1

function printNum(startNum,endNum,increment){
    let result='';
    for(let i = startNum; i <= endNum ;i += increment){
        result +=`${i} `;
    }
    console.log(result);
}

printNum(0,50,5);
//Function call or execution and re-usablity
//printNum(100,500,4);
//printNum();
//printNum();

/* Types of functions
Isolated Function -> No input parameter and it does not return any value to back
Function with parameter -> It take Input as parameter and does not return any values to the fun back
Function with parameter and return type -> it take input and return value after processing on it back to the function
 */
//1-> Isolated Function
function greet(){
    console.log(`Good Morning`);
}greet();

let greetMe= function(){
    console.log(`Good Morning`);
}
console.log(greetMe);
greetMe();

//2->Function with Parameter

  let wishMeOn =function(name,age){
    let messg = `Hello ${name} you are ${age} yrs old`;
    console.log(messg);
};
wishMeOn(); // no error both will value take as undefined
wishMeOn('John' ,67);//in this no error 
wishMeOn('John');// this also no error in Js but will take another parameter as undefined
wishMeOn(48,'John');// this also no error but it looks weired u need to take care of squence of element to pass

//3->Function with parameter and return type
let sum = function(a,b){
    let result =2*(a+b);
    return result;
};
let output=sum(10,20);
console.log(output);

//function with an object as parameter
let printObj = function(obj){
    console.log(obj);
};
printObj(obj={name:'Rajan' , age: 20});

let mobile ={
    brand:'Samsung',
    color:'black',
    price:56000
};
printObj(mobile);

//function with an array as a parameter
let printArray = function(array){
    let result='';
    for(let index in array){
        result +=`INDEX : ${index} => VALUE :${array[index]}\n`;

    }
    console.log(result);
};
printArray(array=[12,24,56,78,97,65,43,33]);

let colors=['white','balck','orange','perple','bule','red'];
printArray(colors);

//function inside an object
let student = {
    firstName: 'Rythm',
    lastName : 'Aradya',
    fullName : function(){
    //return 'Rythm Aradya';
    return `${this.firstName} ${this.lastName}`;
}
};
//console.log(student.fullName);
console.log(student.fullName());

//Nested Function
let outerFn = function(){
    console.log('I am an Outer Function');
    let innerFn = function(){// fun declaration
        console.log('I am an Inner Function');
    };// always call a fun after declration
    innerFn();// fun call
};
outerFn(); // fun declaration so execute it

//Twisted Function 
let twistedFn = function(){
    let name= 'Jhon';
    let printStudent = function(){
        let student ={
            name: 'Rajan',
            age:20,
            course :'CS'
        };
        return student;
    };
    return printStudent;
};
let innerFn = twistedFn(); // printstudent
let studentObj = innerFn();
console.log(studentObj.name);

//Prepare chicken curry with Functions

let glassBowl = function(rowChicken, masala){
    let marinatedChicken= `MIXING : ${rowChicken} ${masala}`;
    return marinatedChicken;
}

let cookingBowl = function (marinatedChicken,water){
 let cookedChicken =`cooking : ${marinatedChicken}  ${water}`;
 return cookedChicken;
}

let eatingPlate = function(cookedChicken,rice){
    let eating =`EATING: ${cookedChicken} ${rice}`;
    console.log(eating);
}

let rowChicken =`3Kg chiken`;
let masala='Garlic, peppar, Salt';
let marinatedChicken=glassBowl(rowChicken, masala);
let water=`1 liter Water`;
let cookedChicken=cookingBowl(marinatedChicken,water);
let rice =`1 Kg rice`;
eatingPlate(cookedChicken,rice);


