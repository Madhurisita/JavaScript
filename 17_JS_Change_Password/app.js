//check Box password hide and display
let passwordBox = document.querySelector(selectors ='#password');// get two elements
let checkBox = document.querySelector(selectors = '#checkbox');
//apply change event for check box password to text
checkBox.addEventListener('change', function(){
   // passwordBox.setAttribute(qualifiedName = 'type', value='text');
    let typeArrtribute = passwordBox.getAttribute(qualifiedName='type');
    if(typeArrtribute === 'password'){
        passwordBox.setAttribute(qualifiedName='type' ,value='text');

    }
    else{
        passwordBox.setAttribute(qualifiedName='type',value='password')
    }
}); 

// to change attribute two fun
//1>  getAttribute('src') ->
//2>  setAttribute ('type','text')->

/* <img  src="facebook.jpg">

<input type='password'>*/