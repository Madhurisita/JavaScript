// creation of an array
let num =[10,20,30];
console.log( num);

//access as elements of an array index
console.log(num['0']);
console.log(num['1']);
console.log(num['2']);
console.log(num['3']); //undefined bcz its non existing index of array

//Iteration of array elements
let colors =['white','black','silver','bule','Yellow'];
//1 .normal for loop

let result ='';
for(let i=0;i <= colors.length-1;i++){
    result +=`${colors[i]}  `;
    //console.log(colors[i]);
}
console.log(result);

//2  . for-in loop
result=' '; //Upto ES5 
for(let index in colors){
    //console.log(index);  //every iteration index values
    result += `${colors[index]} `;

}
console.log(result);

//3  . for-off loop frm ES6
result=' '; // 
for(let color of colors){
    result +=`${color}  `;  //every iteration index values
}
console.log(result);

//4 .for each function upto ES5

result='';
colors.forEach(function(color){
    result += `${color} `;
});
console.log(result);


//5 . forEach with Arrow function from ES6
result='';
 colors.forEach(color => result += `${color} `);
console.log(result);

//Array of Objects
let employees =[
    {
        id : 1,
        name : 'Jo',
        age : 40,
        desg:'Manager',
        isActive : true
    },
    {
        id :2,
        name:'Joni',
        age: 46,
        desg:'Manager',
        isActive : true
    },
    {
        id :3,
        name:'Rohan',
        age: 38,
        desg:'HR',
        isActive : false
    },
    {
        id :4,
        name:'Leusisa',
        age: 35,
        desg:'Manager',
        isActive : false
    },
    {
        id :5,
        name:'Rajan',
        age: 41,
        desg:'sr.Manager',
        isActive : true
    },
    {
        id :6,
        name:'Larra',
        age: 40,
        desg:'Manager',
        isActive : true
    },
];
//access all employees
//console.log(employee);
result='';

for(let employee of employees){
    result  += `${employee.name} `;
}
console.log(result);

//filter the junior employee: age >= 40
let juniorEmployees =[];
for(let employee of employees){
    if(employee.age >= 40){
        juniorEmployees.push(employee);
    }

}console.log(juniorEmployees);

//fitter active employees : isActive :true

let activeEmployee=[];
for(let employee of employees){
    if(employee.isActive){
        activeEmployee.push(employee);
    }
}
console.log(activeEmployee);

//functions of Arrays
//shift() -> remove the first element from array
console.log('...........................shift().......................');
let technologies =['html','c++','javascripyt','jquery','bootstrap'];
console.log(technologies);
technologies.shift();
console.log(technologies);


//unshift() -> add the first element to array
console.log('...........................unshift().......................');
technologies =['html','c++','javascripyt','jquery','bootstrap'];
console.log(technologies);
technologies.unshift(item = 'node js');
console.log(technologies);

//push() -> add the last element to array
console.log('...........................push().......................');
technologies =['html','c++','javascripyt','jquery','bootstrap'];
console.log(technologies);
technologies.push('node js');
console.log(technologies);

//pop() -> it removes the element to array
console.log('...........................pop().......................');
technologies =['html','c++','javascripyt','jquery','bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies);

//sort -> sort array elements in assending order as per there alphabetical names starting order 
console.log('...........................sort().......................');
technologies =['html','c++','javascripyt','jquery','bootstrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);


//reverse -> all array elements printed by reverse
console.log('.........................reverse()......................');
technologies =['html','c++','javascripyt','jquery','bootstrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

//reverse order of elements //as an decending order
//unshift() -> add the first element to array
console.log('................reverse order().......................');
technologies =['html','c++','javascripyt','jquery','bootstrap'];
console.log(technologies);
technologies.sort().reverse(); //sorted one then reversed
console.log(technologies);

//splice(index) ->  to remove all the elemnts from the given index  
console.log('...........................splice(index).......................');
technologies =['html','c++','javascripyt','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2);//if it is 0 then all will deleted
console.log(technologies); 

//splice(index) ->  to remove  the given no of elements from the given index  
console.log('.......................splice(index).......................');
technologies =['html','c++','javascripyt','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2,3);// this frm 2 nd index 3  elements is deleted
console.log(technologies); 


//splice(index,1,replace Elements) ->  it replaces the given elements at the given  index
console.log('.......................splice(index).......................');
technologies =['html','c++','javascripyt','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2,1,'`node js');// this at 2 nd index it replace as node js  
console.log(technologies); 

// join() -> to join the array elements to string  
console.log('.......................join().......................');
technologies =['html','c++','javascripyt','jquery','bootstrap'];
console.log(technologies);
let techString = technologies.join(' - '); //seperated with - as a string
console.log(techString);

// split() -> to split a string  to an array
console.log('.......................split().......................');

console.log(techString);
let newTech = techString.split(seperator =' - '); //seperated with - as a string to array
console.log(newTech);

//for each loop
result='';
colors.forEach(function(color){
    result +=`${colors}`;
});
console.log(result);

// filter an array elements based on condtition

//filter the junior employee: age >= 40
console.log('.......................filter().......................');

juniorEmployees =[];
for(let employee of employees){
    if(employee.age >= 45){
        juniorEmployees.push(employee);
    }

}console.log(juniorEmployees);

let jrEmply = employees.filter(function(employee){
    return employee.age >= 45;

});
console.log(jrEmply);

console.log('..............Active filter()...................');

activeEmployee=[];
for(let employee of employees){
    if(employee.isActive){
        activeEmployee.push(employee);
    }
}
console.log(activeEmployee);

 actEmployee = employees.filter(function(employee) {
    return employee.isActive;
});
console.log(actEmployee);














