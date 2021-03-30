const mainSection = document.getElementById('main-section');
const btnDiv = document.createElement('div');
const btnLogin = document.createElement('button');
const btnSignup = document.createElement('button');
const signupDiv = document.createElement('div');

window.addEventListener('load', () => {
    btnDiv.classList.add('btn-login-div');
    btnLogin.innerText = 'Login';
    btnLogin.classList.add('btn-intro', 'btn-login');
    btnSignup.innerText = 'Sign Up';
    btnSignup.classList.add('btn-intro', 'btn-signup');
    mainSection.appendChild(btnDiv);
    btnDiv.appendChild(btnLogin);
    btnDiv.appendChild(btnSignup);
});

// SIGN UP FORM
btnSignup.addEventListener('click', () => {
    btnDiv.remove();
    const signupHeader = document.createElement('h2');
    signupHeader.innerText = 'Sign Up';
    signupHeader.classList.add('signup-header');
    // CREATE ELEMENTS
    const signupForm = document.createElement('form');
    const signupFormFName = document.createElement('input');
    const signupFormLName = document.createElement('input');
    const signupFormEmail = document.createElement('input');
    const signupFormPassword = document.createElement('input');
    const signupFormTerms = document.createElement('input');
    const signupFormTermsLabel = document.createElement('label');
    const signupFormSubmit = document.createElement('input');
    // ATTRIBUTES
    // FIRST NAME
    signupFormFName.setAttribute('type', 'text');
    signupFormFName.setAttribute('name', 'fname')
    signupFormFName.setAttribute('placeholder', 'First Name');
    signupFormFName.setAttribute('required', 'true');
    // LAST NAME
    signupFormLName.setAttribute('type', 'text');
    signupFormLName.setAttribute('name', 'lname');
    signupFormLName.setAttribute('placeholder', 'Last Name');
    // EMAIL
    signupFormEmail.setAttribute('type', 'email');
    signupFormEmail.setAttribute('name', 'email');
    signupFormEmail.setAttribute('placeholder', 'Email Address');
    // PASSWORD
    signupFormPassword.setAttribute('type', 'password');
    signupFormPassword.setAttribute('name', 'password')
    signupFormPassword.setAttribute('placeholder', 'Password');
    // TERMS
    signupFormTerms.setAttribute('type', 'checkbox');
    signupFormTerms.setAttribute('name', 'agree-to-terms');
    signupFormTermsLabel.setAttribute('for', 'agree-to-terms');
    // SUBMIT
    signupFormSubmit.setAttribute('type', 'submit');
    signupFormSubmit.setAttribute('name', 'submit')
    signupFormSubmit.setAttribute('form', 'submit-form');
    // ADD ID AND CLASS LIST
    signupForm.classList.add('signup-form');
    signupFormFName.classList.add('signup-form-fname', 'signup-field');
    signupFormLName.classList.add('signup-form-lname', 'signup-field');
    signupFormEmail.classList.add('signup-form-email', 'signup-field');
    signupFormPassword.classList.add('signup-form-password', 'signup-field');
    signupFormSubmit.classList.add('signup-form-submit')
    signupFormTerms.id = 'agree-to-terms';
    signupForm.id = 'signup-form';
    // INNER HTML
    signupFormTermsLabel.innerHTML = 'Agree to terms';
    signupFormSubmit.innerHTML = 'Submit';
    // APPEND CHILDS
    signupForm.appendChild(signupFormFName);
    signupForm.appendChild(signupFormLName);
    signupForm.appendChild(signupFormEmail);
    signupForm.appendChild(signupFormPassword);
    signupForm.appendChild(signupFormTerms);
    signupForm.appendChild(signupFormTermsLabel);
    signupForm.appendChild(signupFormSubmit);
    signupDiv.appendChild(signupHeader);
    signupDiv.appendChild(signupForm);
    mainSection.appendChild(signupDiv);
});