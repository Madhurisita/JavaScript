/* 
let -> keyword to delcare a variable
 a -> variable name or referance variable
 = -> assignment operator
 10 ->values or data
 ; -> end of the statement
 */


let a = 10;
let b = 20;
let sum = a + b;
console.log('The Sum of '+ a +','+ b +' is: '+ sum); // ES5 

//ES6 -> Template String / Template Literal(` `) back ticks

console.log(`The Sum of ${a}, ${b} is :${sum}`);//ES6

// Rules in Declarations of variables
/*  1. All variables are case sensitive
  <html> <HTML> <Html>  */
    let name ='Naveen';
    let Name ='John';
    console.log(name);
    console.log(Name);

/* 2. All variables names must be in camelCase ==myEmployeeName
 Ex :*/
  let employeename = 'John';

/* 3. let myManagerNameWhileWorkingInInfosys='sham';
max allowes char lenth 15  */


/* 4.char allowed are a-z , A-Z, $ ,  _,0-9 Numbers*/

let number = 10;//valid
    let $number=20;
    let _number = 30;
    let number_1 = 40;
    //let 1Number =50; // not valid

    //variable must not startes with a number

    //let #name ='John'; // not valid

/* 5. a variable must not re-deaclared  (only one time declarartion 
    possible value reasign can be possible)

let name=' Naveen';
let name= 'Jhon';
console.log(name);//errorr  */
