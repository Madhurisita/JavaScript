/*if-else always check each condition if else if else like that one by one if u r ans is last condition then it checks 
every condition else to switch direct statement so switch */
let time = 11;
let wishMessage =' ';
if(time >= 0 && time <=12){
    wishMessage=`Good Morning`;
}
else if(time > 12 && time <= 17){
    wishMessage=`Good Afternoon`;

}
else if(time > 17 && time <= 23){
    wishMessage=`Good Evening`;

}
else{
    wishMessage=`Enter a Proper Time`;

}
console.log(wishMessage);

/* Switch Statement


0 -> SunDay
1 -> MonDay
2 -> TuesDay
3 -> WednesDay
4 -> ThursDay
5 -> FriDay
6 -> SaturDay
*/

let day = new Date().getDay();
console.log(day);
let today =' ';
//day = 7; dont hazak let js gives days automatically if it directsly jump to correct true one dont check one by one each statement
switch(day){
    case 0:
        today = 'Sunday';
        break;
    case 1:
        today = 'Monday';
        break;
    case 2:
        today = 'Tuesday';
        break;
    case 3:
        today = 'Wednesday';
        break;
    case 4:
        today = 'Thuesday';
        break;
    case 5:
        today = 'Friday';
        break;
    case 6:
        today = 'Saturday';
        break;
    default:
        today = 'Enter a Proper Day';
        break;

}
console.log(`Today is: ${today}`);


