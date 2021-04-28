 let count = 0;
 let minutes =0;
 let seconds = 0;
 let miliSeconds = 0;
 let interval = 0;
 let timerRunning = false;

 //starTimer
 let startTimer = () => {
    count++;
    
    minutes = Math.floor(x=(count/100)/60);
    seconds = Math.floor(x=(count/100) - (minutes*60));
    miliSeconds = Math.floor(x= count - (second * 100) - (minutes * 6000));

    document.querySelector(selectors='#minutes').innerText =leadingZero(minutes);
    document.querySelector(selectors='#seconds').innerText = leadingZero(seconds);
    document.querySelector(selectors='#m-seconds').innerText = leadingZero(miliSeconds);
 };
 
 //click on start button
 let startButton = document.querySelector(selecotors='#start-btn');
 startButton.addEventListener(type ='click',listener = function() {
    if(!timerRunning){
  interval = setInterval(startTimer,timeout = 10); //start the timer
  timerRunning = true;
    }
 });

 //click on stop button

 /* key = setInterval() it generates a key that key u need to pass to stop 
 clearInterval(key) at any time
 */
let stopButton = document.querySelector(selectors='#stop-btn');
stopButton.addEventListener(type='click',listener = function(){
   clearInterval(interval);//stop the timer  
});





 //click on reset button

 let resetButton = document.querySelector(selectors='#reset-btn');
 resetButton.addEventListener(type='click',listener=function(){
     clesarIntyerval(interval); //stop the timer
     
    count = 0;
    minutes =0;
    seconds = 0;
    miliSeconds = 0;
    interval = 0;
    timerRunning = false;
    document.querySelector(selectors='#minutes').innerText ='00';
    document.querySelector(selectors='#seconds').innerText = '00';
    document.querySelector(selectors='#m-seconds').innerText ='00';
 });

 //leading zero

 let leadingZero =(time)=>{
     if(time < 9){
     return "0" + time;
     }
     else{
         return time;
     }
 };
