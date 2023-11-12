const inputs = document.querySelectorAll("input:not([type='submit'])");
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const inputEmail = document.querySelectorAll("input([type='email'])");


inputs.forEach(input => {
    // Add event listener for invalid inputs for all inputs
    input.addEventListener('invalid', addErrorMessage);

    // Check validity on every blur
    input.addEventListener('blur', (event) => {
        input.checkValidity();
    })

    // Remove existing error messages on focus
    input.addEventListener('focus', removeErrorMessage);

})

function onInput() {
    console.log(input.value);
    if (isEmailValid(input.value)) {
        inputEmail.style.borderColor = 'green';
    } else {
        inputEmail.style.borderColor = 'red';
    }
}

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

inputEmail.addEventListener('input', onInput);

function addErrorMessage(e) {
    var name = e.target.getAttribute("name");

    // var error_icon = document.createElement('span');
    // error_icon.setAttribute("data-id", name);
    // error_icon.classList.add('error-icon');
    // error_icon.innerHTML = "<img src='images/icon-error.svg' alt=''>";

    var error_message = document.createElement('span');
    error_message.setAttribute("data-id", name);
    error_message.classList.add('error-message');

    if (e.target.value == "" || e.target.value == null) error_message.innerHTML = "" + e.target.getAttribute("placeholder") + " cannot be empty.";
    else error_message.innerHTML = "Looks like this is not an " + e.target.getAttribute("placeholder") + ".";


    e.target.after(error_message);
    // e.target.after(error_icon);

    e.target.classList.add('error');
}

function removeErrorMessage(e) {
    var elements = document.querySelectorAll("[data-id='"+ e.target.getAttribute("name")+"']");

    elements.forEach(error_element => {
        error_element.remove();
    })

    e.target.classList.remove('error');
}