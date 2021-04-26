//change Event On select Box
let selectBox =  document.querySelector(selector='#lang-select');
selectBox.addEventListener('change', function(){
 let selectedOption = selectBox.value;
 let languageOptionEL= document.querySelector(selector='#lang-option');
 languageOptionEL.innerText = selectedOption;
});