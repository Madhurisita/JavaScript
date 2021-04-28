//SMS App
let textAreaEl = document.querySelector(selectors='#text-area');
let charCountEl  = document.querySelector(selectors='#char-count');
textAreaEl.addEventListener('keyup' ,function(){
    let textLength = textAreaEl.value.length;
    charCountEl.innerText = textLength;
}); 