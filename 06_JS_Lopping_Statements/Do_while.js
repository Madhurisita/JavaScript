/* Do_while syntax

initialization 
do{
    //statements
    //incre / decre (always last line)
}
while(codition)
*/
//Print 0 -10 diff 1

let result = ' ';
let i = 0;
do{
    if(i <= 9){
    result += `${i} , `;
    }
    else{
        result += `${i}  `;  
    }
    i++;
}
while(i <=10 );
console.log(result);

// print  20 -0 with diff  2
result = '';
i =20;
do{
    if(i > 0){
    result +=`${i} , `;
    }
    else{
        result +=`${i} `;  
    }
    i-= 2;
}while(i >= 0);
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
 do{
     let j=1;
     do{
         result +=`* `;
         j++
     }while(j<=i)
     result +='\n';
     i++;
 }while(i <= num);
 console.log(result);

 
 /*
   1
   1 2
   1 2 3 
   1 2 3 4
   1 2 3 4 5
*/

result='';
i=1;
do{
    let j=1;
    do{
        result +=`${j} `;
        j++;
    }while(j <= i)
    result +=`\n`;
i++;
}while (i <= 5);
console.log(result);

/*
   1
   22
   333
   4444
   55555
*/

result ='';
i = 1;
do{
    let j=1;
    do{
        result +=`${i} `;
        j++;
    }while( j <= i);
    result +=`\n`;
    i++;
}while(i <= 5);
console.log(result);

/*
   12345
   1234
   123
   12
   1
   */
  result ='';
  i= 5;
  do{
      let j=1;
      do{
          result +=`${j} `;
          j++;
      }while(j <= i)
      result +=`\n`;
      i--;
  }while( i >= 1)
console.log(result);


   /*
   55555
   4444
   333
   22
   1

   */
  result =' ';
  i=5;
  do{
      let j=1;
      do{
        result += `${i} `;
        j++; 
      }while(j<=i)
      result +=`\n `;
      i--;
  }while(i >= 1 );
  console.log(result);