const mainSection = document.getElementById('main-section');
const introBtnDiv = document.createElement('div');
const btnLogin = document.createElement('button');
const btnSignup = document.createElement('button');
const signupDiv = document.createElement('div');

window.addEventListener('load', () => {
    introBtnDiv.classList.add('btn-login-div');
    btnLogin.innerText = 'Login';
    btnLogin.classList.add('btn-intro', 'btn-login');
    btnSignup.innerText = 'Sign Up';
    btnSignup.classList.add('btn-intro', 'btn-signup');
    mainSection.appendChild(introBtnDiv);
    introBtnDiv.appendChild(btnLogin);
    introBtnDiv.appendChild(btnSignup);
});

// FUNCTIONS

const loadSignup = () => {
    introBtnDiv.remove();
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
        const errorArr = [];
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error-div');
        signupDiv.appendChild(errorDiv);
        if (signupFormTerms.checked === false) {
            errorArr.push('You must agree to the terms');
        }
        else if (signupFormFName.value === '') {
            errorArr.push('You must enter a first name');
        }
        else if (signupFormLName.value === '') {
            errorArr.push('You must enter a last name');
        }
        else if (signupFormEmail.value === '') {
            errorArr.push('You must enter an email address');
        }
        else if (signupFormPassword.value === '') {
            errorArr.push('You must enter a password');
        }
        else if (signupFormPassword.value.length < 7) {
            errorArr.push('Please enter a password of at least 7 characters');
        }
        for (let i = 0; i < errorArr.length; i++) {
            errorDiv.textContent += errorArr[i];
        }

        localStorage.setItem('First Name', signupFormFName.value);
        localStorage.setItem('Last Name', signupFormLName.value);
        localStorage.setItem('Email', signupFormEmail.value);
        localStorage.setItem('Password', signupFormPassword.value);
        localStorage.setItem('Agree to terms?', signupFormTerms.checked);
    });
}

btnSignup.addEventListener('click', () => { 
    loadSignup();
});