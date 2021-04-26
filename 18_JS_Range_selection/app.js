//range select
/* Number format link official web site Intl.NumberFormat like math object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
format Number
*/
let formatNumber = (number) =>  {
    let result = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
    return result;
};

let rangeEl = document.querySelector(selectors ='#range');
let amountEl = document.querySelector(selectors ='#amount');
//appling input event using event listner

rangeEl.addEventListener(type='input' ,listener =  function() {
        let selectedAmount = rangeEl.value;
        amountEl.innerText = formatNumber(selectedAmount);
});
