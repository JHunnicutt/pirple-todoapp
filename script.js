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
    signupDiv.appendChild(signupHeader);
    signupDiv.classList.add('signup-div');

    // SIGNUP FORM
    const signupForm = document.createElement('form');
    signupForm.id = 'signup-form';
    signupDiv.appendChild(signupForm);
    mainSection.appendChild(signupDiv);
    
    // FIRST NAME INPUT
    const signupFormFName = document.createElement('input');
    signupFormFName.id = 'signup-form-f-name';
    signupFormFName.classList.add('signup-field');
    signupFormFName.setAttribute('type', 'text');
    signupFormFName.setAttribute('placeholder', 'First Name');
    signupFormFName.required = true;
    signupForm.appendChild(signupFormFName);

    // LAST NAME INPUT
    const signupFormLName = document.createElement('input');
    signupFormLName.id = 'signup-form-l-name';
    signupFormLName.classList.add('signup-field');
    signupFormLName.setAttribute('type', 'text');
    signupFormLName.setAttribute('placeholder', 'Last Name');
    signupFormLName.required = true;
    signupForm.appendChild(signupFormLName);

    // EMAIL INPUT
    const signupFormEmail = document.createElement('input');
    signupFormEmail.id = 'signup-form-email';
    signupFormEmail.classList.add('signup-field');
    signupFormEmail.setAttribute('type', 'email');
    signupFormEmail.setAttribute('placeholder', 'Email Address');
    signupFormEmail.required = true;
    signupForm.appendChild(signupFormEmail);

    // PASSWORD INPUT
    const signupFormPassword = document.createElement('input');
    signupFormPassword.id = 'signup-form-password';
    signupFormPassword.classList.add('signup-field');
    signupFormPassword.setAttribute('type', 'password');
    signupFormPassword.setAttribute('placeholder', 'Password');
    signupFormPassword.required = true;
    signupForm.appendChild(signupFormPassword);

    // AGREE TO TERMS INPUT
    const signupFormTerms = document.createElement('input');
    const signupFormTermsLabel = document.createElement('label');
    signupFormTerms.id = 'signup-form-agree';
    signupFormTerms.setAttribute('type', 'checkbox');
    signupFormTermsLabel.innerText = 'Agree to terms';
    signupForm.appendChild(signupFormTerms);
    signupForm.appendChild(signupFormTermsLabel);

    // SUBMIT BUTTON
    const signupFormSubmit = document.createElement('button');
    signupFormSubmit.id = 'signup-form-submit';
    signupFormSubmit.setAttribute('type', 'submit');
    signupFormSubmit.innerText = 'Submit';
    signupForm.appendChild(signupFormSubmit);

    signupFormSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        if (signupFormTerms.checked === false) {
            const mustAgree = document.createElement('p');
            mustAgree.innerText = 'You must agree to the terms';
            mustAgree.classList.add('must-agree-error');
            signupDiv.appendChild(mustAgree);
        }
    });
});