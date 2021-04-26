/*
While Loop Syntax
============================
initialization
while(condition){
    //statements
    //incre / decre (always last line)
}
===================================
Print the values from 0 to 10
*/

let i=0;
while(i <= 10){
    console.log(i);
    i++;
}
/*
1
2
3
.
.
*/
let result=''; //an empty string for space to print
   i=0;
while(i <= 10){
    if(i <= 9){
    result +=`${i}  , `;
    }
    else{
        result +=`${i}`;   
    }
    i++;
}
console.log(result);

/*print the values from 20-0 diff 2
*/
result='';
i=20;
while(i>=0){
    if(i > 0){
        result += `${i} , `;

    }
    else{
        result += `${i}`;
    }
    i -=2;
}
console.log(result);

/* while loop inside while loop
   *
   * *
   * * *
   * * * *
   * * * * *
*/
 let num=5;
 result='';
 i = 1;
 while(i <= num){
     let j=1;
     while(j<=i){
         result +=`* `;
         j++
     }
     result +='\n';
     i++;
 }
 console.log(result);

 /*
   1
   1 2
   1 2 3 
   1 2 3 4
   1 2 3 4 5
*/

num=5;
result='';
 i=1;
while(i <= num){
    j=1;
    while( j<= i)
    {
        result +=`${j} `;
        j++;
    }
    result +=`\n`;

    i++;
}
console.log(result);

/*
   1
   22
   333
   4444
   55555
   */
result='';
i=1;
while(i <= num){
    j=1;
    while(j <= i){
        result +=`${i} `;
        j++;
    }
    result +=`\n`;
    i++;
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
   
   i=5;
   while(i >= 1){
       j=1;
       while(j <= i){
           result +=`${j} `;
           j++;
       }
       result +=`\n`;
      i--;
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
    i=5;
   while(i >= 1){
       j=1;
       while(j <= i){
           result +=`${i} `;
           j++;
       }
       result +=`\n`;
      i--;
   }
   console.log(result);