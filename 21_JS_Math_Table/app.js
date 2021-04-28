//Math Table
let numberEl = document.querySelector('#req-number');
numberEl.addEventListener(type='keyup',listener = function() {
    let theNumber = Number( numberEl.value);
    document.querySelector(selectors='#number').innerText = theNumber;
calculate();
});
let rangeEl = document.querySelector(selectors='#multiplier');
rangeEl.addEventListener(type='input',listener= function(){
    let selectedMultiplier = Number(rangeEl.value);
    document.querySelector(selectors='#multi').innerText = selectedMultiplier;
calculate();
});
//calculate

let calculate = () =>{
    let theNumber = Number(document.querySelector(selectors= '#number').innerText);
    let multiplier = Number(document.querySelector(selectors= '#multi').innerText);
    let mathResult = theNumber * multiplier;
    document.querySelector(selectors='#result').innerText = mathResult;
}
