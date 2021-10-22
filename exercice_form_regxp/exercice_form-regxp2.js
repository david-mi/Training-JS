//// VARIABLES MAIL

let formEmail = document.querySelector('#loginForm').email;
let smallEmail = document.querySelector('.small-mail');

//// ECOUTE DE L'INPUT DU MAIL

formEmail.addEventListener('input', function(){
    inputEmail(this); 
    
})

//// VALIDATION OU NON DU MAIL

let inputEmail = (text) => {
    let regExpMail = new RegExp(/^((\w[^\W]+)[\.\-]?){1,}\@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if (regExpMail.test(text) === true) {
        smallEmail.innerText = 'Email VALIDE';
        smallEmail.classList.add('small-wright');
        smallEmail.classList.remove('small-wrong');

    }else{
        smallEmail.innerText = 'Email NON VALIDE';
        smallEmail.classList.remove('small-wright');
        smallEmail.classList.add('small-wrong');
    }   
}


//// VARIABLES PASSWORD

let formPassword = document.querySelector('#loginForm').password;
let smallPassword = formPassword.nextElementSibling;
let valid = false;

//// ECOUTE DE L'IMPUT DU PASSWORD

formPassword.addEventListener('input',() =>{
    inputPassword(formPassword.value);
})

/// VALIDATION OU NON DU PASSWORD

let inputPassword = (text) => {
    if (text.length < 5){
        smallPassword.innerText = '5 caractères minimum';
        smallPassword.classList.add('small-wrong');
        
    }else if (!/[A-Z]{1}/.test(text)){
        smallPassword.innerText = 'Une majuscule minimum';
    }else {
        smallPassword.innerText = 'Password VALIDE';
        smallPassword.classList.remove('small-wrong');
        smallPassword.classList.add('small-wright');
        valid = true;
    }
    return valid;
}

//// VARIABLES BOUTON

let button = document.querySelector('.btn');

////   ECOUTE DU CLIC SUR LE BOUTON

button.addEventListener('click', (e) =>{
    if (!valid){
        e.preventDefault();
        console.log('veuillez compléter les champs')
    }
        
    
    
    
} )
