/* JavaScript Operators
----------------------------
Assignment  Operators : =
Arithmetic Operators  : + - / * %
Short hand Math Operators : += , -= , /= , *=
Conditional Operators  :< ,> , <= , >= , !=
Unary Operators  : ++ , --
Logical Operators :  && ,|| , ^ and or xor
Ternary Operator : ?:
Equality Operators : == , ===
*/

//Assignment Operator = to assign data to a variable.
let test=10;
console.log(test);

//Arithmetic Operators : 
let num1 = 10;
let num2 = 20;
console.log(`Sum: ${num1 + num2}`);
console.log(`Sub: ${num1 - num2}`);
console.log(`Mul: ${num1 * num2}`);
console.log(`Div: ${num1 / num2}`);

// find the no is even or odd
let number= 12;
if(number % 2  ===0){
    console.log(`${number} is an a even Number`);
}
else{    
    console.log(`${number} is an a Odd Number`);
}

// short hand operators:  += -= *= /=
let a=10;
let b=20;
let add =10;
// add = add + (a+b);
add += (a+b);// 10+20+10 = 40
console.log(add);

//Conditional Operators : < > <= >= !==

let marks = 35;
if(marks <= 35){
    console.log('You Failed The Exam');
}
else{
    console.log('You Cleared the Exam');
}


//Unary Operators  : ++ , -- Increment or Decrement any variable value by one
let x=10;
x = x - 1;
x -= 1;
x --;
console.log(x);

//Logical Operators :  && ,|| , ^ and or xor
/*
   AND ===  T && T -> T reaming  are False
   Or ===   F || F -> F remaing are true 
   XOR === T ^ F , F ^ T -> T 
*/
let inRelation = true;
let parentAgreed = true;
if(inRelation && parentAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log(`Wait untill the Parents Agreed`);
}

//Ternary Operator : ?:    shortcut for if else condtion and less no of lines one line code
/* 
syntax : (condition) ? true : false;
*/
marks = 65;
let message = '';
(marks <= 35) ? message ='You Failed the Exam' : message= 'You cleared the Exam';
console.log(message);

//Equality Operators : == , ===
 a = 10; //no    in java u get error uncomparable values not same type but in javascript u get equals 
 b = '10'; //string 
if(a == b){  //a and b var are operands in js type conversion will done whever u try to compare with == string to no conversion so u get equals 
    console.log(`Both are Equal`);
}
else{
    console.log(`Both are Not Equal`);
}

a = 10; //no  
b = '10'; //string 
if(a === b){  //a and b var are operands in js type  no conversion will done whenever u try to compare with === 
   console.log(`Both are Equal`);
}
else{
   console.log(`Both are Not Equal`);
}

/* coversion and comparision ==
no conversion direct comparision === */