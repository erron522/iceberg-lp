//Variables
let emailState = false;
let emailInput =   document.getElementsByClassName('email-input')[0];
let emailButton =   document.getElementsByClassName('email-button')[0];

let addErrors = () => {
    document.getElementsByClassName('email-input') [0].classList.add('email-form-group-error');
    document.getElementsByClassName('email-error-message') [0].classList.add('email-error-message-active');
}

let removeErrors = () => {
    document.getElementsByClassName('email-input') [0].classList.remove('email-form-group-error');
    document.getElementsByClassName('email-error-message') [0].classList.remove('email-error-message-active');
}

let showThankMessage = () => {
    document.getElementsByClassName('email-thank') [0].classList.add('email-thank-success');
    
}


//Email Info ----


    //Validation
    function emailIsValid (email) {   
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    }

    //Add error message when not validated
    emailButton.addEventListener('click', () => {
        if(emailIsValid(emailInput.value)) {
            showThankMessage();
            document.getElementsByClassName('email-input') [0].value=null;
        }
        else {
           addErrors();
        }
    })  
    
    //Remove error message when validated
    emailInput.addEventListener('click', () => {
        removeErrors();
        
    })