let printWishMessage = (message , color) => {
    let h1Tag = document.querySelector(selectors='#msg-1');
h1Tag.innerText = message;
h1Tag.style.backgroundColor = color;
h1Tag.style.padding = '15px';
h1Tag.style.boxShadow ='0 0 10px black';

};

let gmButton = document.querySelector(selectors='#gm-btn');
gmButton.addEventListener(type ='click',listener = function() {
   printWishMessage(message='Good Morning' , color='limegreen');
});
 

let gaButton = document.querySelector(selectors='#ga-btn');
gaButton.addEventListener(type='click',listener = function(){
   printWishMessage(message='Good Afternoon',color='yellow');
});


let geButton = document.querySelector(selectors='#ge-btn');
geButton.addEventListener(type='click',listener = function(){
   printWishMessage(message='Good Evening',color='orange');
});

let gnButton = document.querySelector(selectors='#gn-btn');
gnButton.addEventListener(type='click',listener = function(){
   printWishMessage(message='Good Night', color='black');
});
