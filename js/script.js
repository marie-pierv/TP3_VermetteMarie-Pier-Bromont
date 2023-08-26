const validateForm = () => {

    const form = document.getElementById('form'); // on manipule la valeur de l'input et non l'input ou le contenant
    const nom = document.getElementById('form__nom'); 
    const prenom = document.getElementById('form__prenom'); 
    const email = document.getElementById('form__email');
    const message = document.getElementById('form__message');

    const nomValue = nom.value.trim();  // enlève les espaces vides
    const prenomValue = prenom.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    let noError = true;   // variable bouléaine réutilisable

    if(nomValue === '') {
        setError(nom, "Un nom est requit");
        noError = false;
    } else {
        setSuccess(nom);
    }

    if(prenomValue === '') {
        setError(prenom, "Un prénom est requit");
        noError = false;
    } else {
        setSuccess(prenom);
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





