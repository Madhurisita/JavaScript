/*
===============================
For Loop syntax
for(initialization;condition;incr/decre){
    //statements
}
==============================
Print the values frm 0 to 10
*/
let result = ' ';
for(let i=0; i <= 10;i++){
    if(i <= 9){
    result += `${i} ,` ;// upto 0 to 9 add comma and space
    }
    else{
        result +=`${i}`;// upto or at 10 dont add comma
    }
}
console.log(result); //come out of the loop

/*
Print the values frm 20 to 0 with diff is 2  like 20 18 16 14 12 10..
*/

result='';
for(let i=20 ; i>=0 ; i -= 2){
    if(i > 0){
        result +=`${i} , `;
    }
    else{
        result += `${i}`;
    }
}

console.log(result); 

/*
 Neasted for loop  for loop inside for loop
   *
   * *
   * * *
   * * * *
   * * * * *
*/

let num = 5;
result ='';
for(let i=1 ;  i <=num ;i++){
    for(let j=1  ; j<= i; j++){
    result += '* ';
}
result +=`\n`; //next line
}
console.log(result);

/*
   1
   1 2
   1 2 3 
   1 2 3 4
   1 2 3 4 5
*/

result ='';
for(let i=1; i<= 5; i++){
    for(let j=1 ; j <=i ;j++){
        result += `${j} `;
    }
    result +=`\n`;
}
console.log(result);

/*
   1
   22
   333
   4444
   55555
   */

  result ='';
  for(let i=1; i<= 5; i++){
      for(let j=1 ; j <=i ;j++){
          result += `${i} `;
      }
      result +=`\n`;
  }
  console.log(result);
/*
   12345
   1234
   123
   12
   1
   */
  result ='';
for(let i=5; i>=1; i--){
    for(let j=1 ; j <=i ;j++){
        result += `${j} `;
    }
    result +=`\n`;
}
console.log(result);

/*
   55555
   4444
   333
   22
   1

   */
  
result ='';
for(let i=5; i>= 1; i--){
    for(let j=1 ; j <=i ;j++){
        result += `${i} `;
    }
    result +=`\n`;
}
console.log(result);


