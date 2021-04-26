//coding Examples
//1. Find the number of 'o' in the given string
let msg ='Good Morning';
let findZeros =(str) => {
    let count = 0;
    for(let i=0; i<= str.length-1;i++){
        let char = str.charAt(i);// to get each letter of string
        if(char === 'o' || char === 'O'){
            count++;
        }
    }
    return count;
};
console.log(`The Zeros in string are : ${findZeros(msg)}`);

//2. find the reverse string of the given string

msg='Good Morning';
let reversestring =(str) =>{
      let tempstring='';
      for(let i=str.length-1; i>=0; i--){
          let char = str.charAt(i);
          tempstring += char;
      }
      return tempstring;
};
console.log(`${msg} => ${reversestring(msg)}`);


//3.  check given string is palidrom or not
msg = 'ABA';
let ispalindrome =(str) =>{
    return (str === reversestring(str));
   /* if(str === reversestring(msg)){
        return true;
    }
    else{
        return false;
    }*/
};
console.log(`${msg} is palindrom ? ${ispalindrome(msg)}`);//only one value as true or false

/*  4. Triangle  String one 
str = Good

G   ->str.charAt(0) // str.substr(0,1)
Go   ->   str.substr(0,1)
Goo  ->   str.substr(0,1)
Good ->    str.substr(0,1)
let i=1 ,i <= str.length
*/

msg='Madhuri sita';
let triangleOne =(str)=>{
    let tempStr ='';
    for(let i=1 ;i<= str.length; i++){
        tempStr += `${str.substr(from=0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleOne(msg));

/* 5. Triangle string Two
 str = Good
Good  -> str
 ood  ->str.substr(1)
  od  ->str.substr(2)
   d  ->str.substr(3)
   i =0 i<= str.length-1
*/
msg ='Madhuri Sita';
let addSpace =(number) =>{
    let tempspace ='';
    for(let i=1; i<=number ;i++){
        tempspace +=' ';
    }
    return tempspace;
}
let triangleTwo = (str) =>{
    let tempStr ='';
    for(let i=0; i<=str.length - 1; i++){
        tempStr += `${addSpace(i)} ${str.substr(i)} \n`;
    }
    return tempStr;

};
console.log(triangleTwo(msg));

/* 6. Triangle String Three
str = Good
Good ->str.substr(0,4)
Goo ->str.substr(0,3)
Go  ->str.substr(0,2)
G   ->str.substr(0,1)
i = legnth ,i >= 1
*/

msg='Madhuri Sita';
let triangleThree = (str) =>{
    let tempStr ='';
    for(let i= str.length; i>=1 ; i--){
        tempStr +=`${str.substr(from=0,i)}\n`;
    }
return tempStr;
};
console.log(triangleThree(msg));


/* 7 Triangle String Four
str = Good
    d ->str.substring(3) all 0 1 2 3
   od ->str.substr(2) 0 1 2
  ood -> str.substr(1) 0 1
 Good  ->str.substr(0)0
 i= str.length -1 ;i >=0 ;i--
*/  
msg='Madhuri Sita';
let triangleFour = (str) =>{
    let tempStr ='';
    for(let i= str.length -1; i>=0 ; i--){
        tempStr +=`${addSpace(i)} ${str.substr(i)}\n`;
    }
return tempStr;
};
console.log(triangleFour(msg));


