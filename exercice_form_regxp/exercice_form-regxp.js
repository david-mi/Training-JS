let form = document.querySelector('#loginForm');

form.email.addEventListener('change', function(){
    validEmail(this);
});

form.password.addEventListener('input', function(){
    validPassword(this);
})


/// VALIDATION MAIL

const validEmail = function(inputEmail){
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 
    'g'
    );

    let testEmail = emailRegExp.test(inputEmail.value);

    let small = inputEmail.nextElementSibling;
 
   if (testEmail){
       small.innerHTML = 'Mail conforme';
       small.classList.add('small-wright')
       small.classList.remove('small-wrong')
       

   }else{
       small.innerHTML = 'Mail non conforme';
       small.classList.add('small-wrong')
       small.classList.remove('small-wright')
   } 
};


/// VALIDATION PASSWORD

const validPassword = function(inputPassword){
let smallPw = form.password.nextElementSibling
pwValid = false;

if(inputPassword.value.length < 3){
    smallPw.innerHTML = 'Le mot de passe doit contenir au minimum 3 caractères.'
}else if (/[a-z]/.test(inputPassword.value) == false){
    smallPw.innerHTML = 'Le mot de passe doit contenir au moins une minuscule.'
}else if (/[A-Z]/.test(inputPassword.value) == false){
    smallPw.innerHTML = 'Le mot de passe doit contenir au moins une majuscule.'
}else if (/[0-9]/.test(inputPassword.value) == false){
    smallPw.innerHTML = 'Le mot de passe doit au moin contenir un chiffre.'
}else{
    smallPw.innerHTML = 'Le mot de passe est conforme !'
    pwValid = true;
}

if (pwValid){
    smallPw.classList.remove('small-wrong')
    smallPw.classList.add('small-wright')
}else {
    smallPw.classList.remove('small-wright')
    smallPw.classList.add('small-wrong')
}
}

