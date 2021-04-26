/* here diff fun for diff msg bcz they are static mesg which is declared with that fun sepretly with diff fun it is lingty code 
let sayGoodMorning = () =>{
    let h1Tag = document.querySelector(selector='#msg-1');
h1Tag.innerText='Good Morning';
h1Tag.style.backgroundColor = 'limegreen';
h1Tag.style.padding = '15px';
h1Tag.style.boxShadow ='0 0 10px black';

};



//sayGoodMorning();
//now button logic is inside a html so after function called it will diaplay a msg so if u dont call the fun it will not display anything
//so for the button we have for event button onclick so thier i am going to call fun o after calling fun it will display msg as Good Morning



let sayGoodAfternoon = () =>{
    let h1Tag = document.querySelector(selector='#msg-1');
h1Tag.innerText='Good Afternoon';
h1Tag.style.backgroundColor = 'yellow';
h1Tag.style.padding = '15px';
h1Tag.style.boxShadow ='0 0 10px black';

}; 

let sayGoodEvening = () =>{
    let h1Tag = document.querySelector(selector='#msg-1');
h1Tag.innerText='Good Evening';
h1Tag.style.backgroundColor = 'orange';
h1Tag.style.padding = '15px';
h1Tag.style.boxShadow ='0 0 10px black';

};

let sayGoodNight = () =>{
    let h1Tag = document.querySelector(selector='#msg-1');
h1Tag.innerText='Good Night';
h1Tag.style.backgroundColor = 'black';
h1Tag.style.padding = '15px';
h1Tag.style.boxShadow ='0 0 10px black';

};

for this in div
  <div>
            <h1 id="msg-1"></h1>
           <button onclick="sayGoodMorning()">Good Morning</button>
            <button onclick="sayGoodAfternoon()">Good Afternoon</button>
            <button onclick="sayGoodEvening()">Good Evening</button>
            <button onclick="sayGoodNight()">Good Night</button>
           

        </div>
        // <button onmouseover="sayGoodMorning()">GoodMorning</button>
                // <button onmouseenter="sayGoodMorning()">GoodMorning</button>
      // <button ondblclick="sayGoodMorning()">GoodMorning</button>

      many lines of code and every fun have same set of code 
      only diff msg and color so y cant u pass this data into dynamic function while fun call
    
*/

//printWishMessage Multiple call with diff aargument one function
//same fun with diff msg
/* <div>
            <h1 id="msg-1"></h1>
           <button onclick="printWishMessage('Good Morning','limegreen')">Good Morning</button>
            <button onclick="printWishMessage('Good Afternoon','yellow')">Good Afternoon</button>
            <button onclick="printWishMessage('Good Evening','orange')">Good Evening</button>
            <button onclick="printWishMessage('Good Night','black')">Good Night</button>
           

        </div>

        disadvantage is  button tag on click u call function
        this is called inline javascript html tage style nav backgroundcolor inthat case inline css is not required 
        bcz  u must not mix the html css u have to seperate file same way
        in button tage u call fun that is from js lang u r mixing js fun call with html tag  that is inline js bcz if u write onlick one fun
        onbulr one fun onover one fun one fine day u messup code bcz u dont no where is js and css u must have seperate function call alo
        in html only html css only css ok
        function call with writting onclick using js only
        event listener we are going to make event  handle  using js
        witch of html tag u want to apply event  so for that event u have to write fun
        same fun but without writing onclick pure html never css in that

    =================================================================
    JavaScript Event Listeners
    --------------------------------------------
    this steps need to do::::
    1-> Get the Html Element/Tag
    2-> Attach an event to the element /Tag
    3-> Write a function for event handling
       
*/
// PrintWishMessage
let printWishMessage = (message , color) => {
    let h1Tag = document.querySelector(selectors='#msg-1');
h1Tag.innerText = message;
h1Tag.style.backgroundColor = color;
h1Tag.style.padding = '15px';
h1Tag.style.boxShadow ='0 0 10px black';

};

//Good morning Button in eventlistner no on direct click bulr 
//on which html tag u want to apply  event then get that html tag and then apply eventlistners
//remove fun call and do that using Js
//so when click button on web call the fun so get button attach event using eventlister bu providing event (click)call fun thats it.
//doucument .queryselector for any button but for perticular button u need to provide it
//good morning button
let gmButton = document.querySelector(selectors='#gm-btn');
gmButton.addEventListener(type ='click',listener = function() {
    alert('GM button is clicked');
   printWishMessage(message='Good Morning' , color='limegreen');
});


let gaButton = document.querySelector(selectors='#ga-btn');
gaButton.addEventListener(type='click',listener = function(){
   // alert('GM button is clicked');
   printWishMessage(message='Good Afternoon',color='yellow');
});

let geButton = document.querySelector(selectors='#ge-btn');
geButton.addEventListener(type='click',listener = function(){
   printWishMessage(message='Good Evening',color='orange');
});

let gnButton = document.querySelector(selectors='#gn-btn');
gnButton.addEventListener(type='click',listener = function(){
   printWishMessage(message='Good Night',color='black');
});

