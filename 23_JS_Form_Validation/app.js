//form validation
let  registrationForm = document.querySelector(selectors='#register-form');
registrationForm.addEventListener(type='submit',listener = function(event){
    event.preventDefault(); //stops auto form submission  just like refresh it its predefined function
    if(validateForm()){
        alert('Form is Submitted Successfully');
    }
   /* else{ not required bcz at started only it display somthing went wrong msg before submitting
        alert('Something went Wrong');
    }*/
});

let  validateForm = () => {
 /*  if(checkUserName() & checkEmail() & checkPassword() & checkConfirmPassword()){
       return true;
   }
   else{
       return false; everything is true it return true
   }*/
 return (checkUserName() & checkEmail() & checkPassword() & checkConfirmPassword());

};

let checkUserName = () => {
    let inputEl = document.querySelector(selectors='#username');
    let inputFeedbackEl = document.querySelector(selectors='#username-feedback');
    let regExp = /^[a-zA-Z0-9]{4,10}$/; // it only contain this char regular Exapression like some formula
    if(regExp.test(inputEl.value)){ //fun test test regular exp with given value
       makeValid(inputEl,inputFeedbackEl);
       return true;
   }
   else{
       makeInValid(inputEl,inputFeedbackEl);
       return false;
   }
};


let checkEmail = () => {
    let inputEl = document.querySelector(selectors='#email');
    let inputFeedbackEl = document.querySelector(selectors='#email-feedback');
  //  let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // it only contain this char
  let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if(regExp.test(inputEl.value)){
       makeValid(inputEl,inputFeedbackEl);
       return true;

   }
   else{
       makeInValid(inputEl,inputFeedbackEl);
       return false;
   }
};


let checkPassword = () => {
    let inputEl = document.querySelector(selectors='#password');
    let inputFeedbackEl = document.querySelector(selectors='#password-feedback');
    //Minimum eight characters, at least one letter, one number and one special character:

    let regExp =  /^[A-Za-z]\w{7,14}$/;
   if(regExp.test(inputEl.value)){
       makeValid(inputEl,inputFeedbackEl);
       return true;

   }
   else{
       makeInValid(inputEl,inputFeedbackEl);
       return false;
   }
};

let checkConfirmPassword = () => {
    let inputEl = document.querySelector(selectors='#c_password');
    let passwordEl = document.querySelector(selectors='#password');
    let inputFeedbackEl = document.querySelector(selectors='#c_password-feedback');
  let regExp =  /^[A-Za-z]\w{7,14}$/;
   if(regExp.test(inputEl.value) && inputEl.value === passwordEl.value){
       makeValid(inputEl,inputFeedbackEl);
     return true;
   }
   else{
       makeInValid(inputEl,inputFeedbackEl);
       return false;
   }
};



//make Valid
let makeValid = (inputEl,inputFeedbackEl) => {
     inputEl.classList.add('is-form-valid');
     inputEl.classList.remove('is-form-invalid');
     inputFeedbackEl.classList.add('text-success');
     inputFeedbackEl.classList.remove('text-danger');
     inputFeedbackEl.innerText = 'Looks Good';     
};


//make InValid
let makeInValid = (inputEl,inputFeedbackEl) => {
    inputEl.classList.remove('is-form-valid');
    inputEl.classList.add('is-form-invalid');
    inputFeedbackEl.classList.remove('text-success');
    inputFeedbackEl.classList.add('text-danger');
    inputFeedbackEl.innerText = `Please Enter a ${inputEl.placeholder}`;
    //placeholder username ,email, password     
};


//username field with keyup event

let usernameEl = document.querySelector(selectors='#username');
usernameEl.addEventListener(type='keyup',listener=function(){
    checkUserName();
});

let emailEl = document.querySelector(selectors='#email');
emailEl.addEventListener(type='keyup',listener=function(){
    checkEmail();
});

let passwordEl = document.querySelector(selectors='#password');
passwordEl.addEventListener(type='keyup',listener=function(){
    checkPassword();
});

let confirmPasswordeEl = document.querySelector(selectors='#c_password');
confirmPasswordeEl.addEventListener(type='keyup',listener=function(){
    checkConfirmPassword();

});
