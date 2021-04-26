/* JS data Types
 basic primitive data types of JS
It defines the type of dat which we can assign to a varible
1) Number -> any number
2) String -> any text data
3) Boolean ->true , false
4) undefined
5) null  
*/

/*String (here we dint delclare the data type name but js 
will get it as it contain string values so it is string data type)
*/
let employeeName= 'John';
console.log(employeeName);
console.log(typeof employeeName);
console.log(`Value : ${employeeName} Type: ${typeof employeeName}`);

/*
let myEmployeeName= True;
console.log(typeof myEmployeeName); // it gives error bcz  lower case true and false are allowed only

String can display using 'John' , "John"  ,`John`  */  

//number 
let employeeAge = 40;
console.log(`value : ${employeeAge} Type : ${typeof employeeAge}`);


//boolean
 let isManager = true;
console.log(`value : ${isManager} Type : ${typeof isManager}`);

//undefined
 /*variable declaration   ans as undefined
default values for the varible which is not assigned yet so by default its undefined
*/ 
let name ;
console.log(name); // fetching values
name ='Naveen'; // assignment of a variable
console.log(name); // fetching values
console.log(`value : ${name} Type : ${typeof name}`);


//numm(dummy values)

let test = null;
console.log(`value : ${test} Type : ${typeof test}`);

/* diff bet undefined and null
not assign values === assign dummy value
online application 1st name middel name lastname
so middel name value is undefined u can delare or not

or middel name some dummy values m1.a */

//Re-Assignment is allowed same variable u can assign diff diff type of data like here int to string its disadvantage of Js
// it is required in TypeScript 
let abc;
abc = 10;
abc= 'test';
abc = null;
console.log(`Value : ${abc} Type : ${typeof abc}`);

