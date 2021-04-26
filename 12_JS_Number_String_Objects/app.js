// Number Object

//Max Number 
console.log(Number.MAX_SAFE_INTEGER);

//min Number
console.log(Number.MIN_SAFE_INTEGER);

//pos Infinity
console.log(Number.POSITIVE_INFINITY);

//neg Infinity
console.log(Number.NEGATIVE_INFINITY);

//parse Int 
let str = '100';
let num = Number.parseInt(str);
console.log(`${typeof str} => ${typeof num}`);

//parse Float 
let str2 = '100.455';
let num1 = Number.parseFloat(str2);
console.log(typeof str2);
console.log(`${typeof str2} => ${typeof num1}`);

//toString
let num3= 100;
let numString = num3.toString();
console.log(`${typeof num3} => ${typeof numString}`);

//toFixed
let amount = 520;
console.log(amount.toFixed(fractionDigits=2));//it will add two point at 520.00 used for fixed curreny ect


// string related operations
let msg = String(value='Good Morning');

//  Length
console.log(msg.length);

//lowercase
console.log(msg.toLowerCase());

//Uppercase
console.log(msg.toUpperCase());

// substr(start index, no of char)
console.log(msg.substr(from=0,lenth=4)); //Good

//substr
console.log(msg.substr(from=5,length=7));
console.log(msg.substr(from=5));// frm that index remaining all get printed

//charAt
console.log(msg.charAt(5));//M

//charCodeAt (ASSCII)
console.log(msg.charCodeAt(5));//captical M asscii code with be 77

//JSON Object
/*
String => Object : parse()
Object => String :stringify()
*/

let student ={
    name: 'Radikha',
    age:22,
    course:'ENTC',
    college :'IIT Madras'
};
console.log(student);

//object to string
let studentstr = JSON.stringify(student);
console.log(studentstr);//Json string as output

// string to object 
/* generally from client side u will get a data as string format so it need to con
convert into object */

let newStudent= JSON.parse(studentstr);
console.log(newStudent);


