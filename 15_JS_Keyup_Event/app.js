//keyUp event Example
let textBox = document.querySelector(selectors ='#username');
textBox.addEventListener(type='keyup', listener=function(){
    //alert('entered a text');
    let textEntered = textBox.value;
    let messageElement = document.querySelector(selectors ='#msg');
    messageElement.innerHTML = textEntered;
});