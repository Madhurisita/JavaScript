//date object
let date = new Date();
console.log(date);

//proper Date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

//proper Time
let currentTime =new Date().toLocaleTimeString();
console.log(currentTime);

//USA Time
let options = {timeZone : 'America/New_York'};
let usaDate = new Date().toLocaleDateString(locales='en-US',options);
console.log(usaDate);


//USA Time
options = {timeZone : 'America/New_York'};
let usaTime = new Date().toLocaleTimeString(locales='en-US',options);
console.log(usaTime);

//today
let today = new Date().getDay();
console.log(today);
let day = new Date().getDay();
today ='';
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

//Month 
/* months start frm
 0-> jan
 1-> feb
 2->march
 3-> april
 4-> may
..*/
let currentMonth = new Date().getMonth();
console.log(currentMonth);


// custom Date designing in what format u want to display date 10/4/21

let c_date = new Date().getDate();
let c_month = new Date().getMonth()+1;// to get proper month bcz in js Month start frm 0 so +1
let c_year  = new Date().getFullYear();
console.log(`${c_date} - ${c_month} - ${c_year}`);
console.log(`${c_date}-${c_month}-${c_year}`);
console.log(`${c_date}.${c_month}.${c_year}`);
console.log(`${c_date} / ${c_month} / ${c_year}`);
console.log(`${c_date} @@ ${c_month} @@ ${c_year}`);



