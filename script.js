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
    // ATTRIBUTES
    signupFormFName.setAttribute('placeholder', 'First Name');
    signupFormLName.setAttribute('placeholder', 'Last Name');
    signupFormEmail.setAttribute('placeholder', 'Email Address');
    signupFormPassword.setAttribute('placeholder', 'Password');
    signupFormPassword.setAttribute('type', 'password');
    signupFormTerms.setAttribute('type', 'checkbox');
    // ADD CLASS LIST
    signupForm.classList.add('signup-form');
    signupFormFName.classList.add('signup-form-fname', 'signup-field');
    signupFormLName.classList.add('signup-form-lname', 'signup-field');
    signupFormEmail.classList.add('signup-form-email', 'signup-field');
    signupFormPassword.classList.add('signup-form-password', 'signup-field');
    // APPEND CHILDS
    signupForm.appendChild(signupFormFName);
    signupForm.appendChild(signupFormLName);
    signupForm.appendChild(signupFormEmail);
    signupForm.appendChild(signupFormPassword);
    signupForm.appendChild(signupFormTerms);
    signupDiv.appendChild(signupHeader);
    signupDiv.appendChild(signupForm);
    mainSection.appendChild(signupDiv);
});