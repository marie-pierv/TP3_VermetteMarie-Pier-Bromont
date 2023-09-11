const validateForm = () => {

    const form = document.getElementById('form'); // on manipule la valeur de l'input et non l'input ou le contenant
    const nom = document.getElementById('nom'); 
    const prenom = document.getElementById('prenom'); 
    const email = document.getElementById('email');
    const evenement = document.getElementById('evenement');

    const nomValue = nom.value.trim();  // enlève les espaces vides
    const prenomValue = prenom.value.trim();
    const emailValue = email.value.trim();
    const evenementValue = evenement.value.trim();

    let noError = true;   // variable bouléaine réutilisable

    if(nomValue === '') {
        setError(nom, "Le nom est requit");
        noError = false;
    } else {
        setSuccess(nom);
    }

    if(prenomValue === '') {
        setError(prenom, "Le prénom est requit");
        noError = false;
    } else {
        setSuccess(prenom);
    }

    if(emailValue === '') {
        setError(email, "Un courriel est requit");
        noError = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Un courriel valide est requit");
        noError = false;
    } else {
        setSuccess(email);
    }

    if(evenementValue === '') {
        setError(evenement, "L'événement est requis");
        noError = false;
    } else {
        setSuccess(evenement);
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





