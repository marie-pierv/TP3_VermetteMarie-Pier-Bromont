const validateForm = () => {

    const form = document.getElementById('form'); // on manipule la valeur de l'input et non l'input ou le contenant
    const username = document.getElementById('username'); 
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    const usernameValue = username.value.trim();  // enlève les espaces vides
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    let noError = true;   // variable bouléaine réutilisable

    if(usernameValue === '') {
        setError(username, "Un nom d'usager est requit");
        noError = false;
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, "Un email est requit");
        noError = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Un email valide est requit");
        noError = false;
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, "Un mot de passe est requit");
        noError = false;
    } else if(passwordValue.length < 8){
        setError(password, 'votre mot de passe doit contenir plus de 8 caractères');
        noError = false;
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, "Un mot depasse est requit");
        noError = false;
    } else if(password2Value.length < 8){
        setError(password2, 'votre mot de passe doit contenir plus de 8 caractères');
        noError = false;
    } else {
        setSuccess(password2);
    }
    return noError;
};

const isValidEmail = email => {    // regess pour valider les caractères spéciaux dans une adresse courriel
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};





