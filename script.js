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
const loadSignupConfirmation = () => {
    signupDiv.remove();
    const signupConfirmationDiv = document.createElement('div');
    signupConfirmationDiv.classList.add('signup-confirmation-div');

    const signupConfirmation = document.createElement('h2');
    signupConfirmation.innerText = 'Thank you for signing up'
    signupConfirmationDiv.appendChild(signupConfirmation);

    const confirmationParagraph = document.createElement('p');
    confirmationParagraph.innerText = 'Please confirm your information below:'
    signupConfirmationDiv.appendChild(confirmationParagraph);

    const confirmationTable = document.createElement('table');
    confirmationTable.classList.add('signup-info-confirmation-table');
    signupConfirmationDiv.appendChild(confirmationTable);

    const confirmationFNameRow = document.createElement('tr');
    const confirmationFNameLabel = document.createElement('td');
    const confirmationFNameData = document.createElement('td');
    confirmationFNameLabel.innerText = 'First Name: ';
    confirmationFNameData.innerText = localStorage.getItem('First Name');
    confirmationFNameRow.appendChild(confirmationFNameLabel);
    confirmationFNameRow.appendChild(confirmationFNameData);
    confirmationTable.appendChild(confirmationFNameRow);

    const confirmationLNameRow = document.createElement('tr');
    const confirmationLNameLabel = document.createElement('td');
    const confirmationLNameData = document.createElement('td');
    confirmationLNameLabel.innerText = 'Last Name: ';
    confirmationLNameData.innerText = localStorage.getItem('Last Name');
    confirmationLNameRow.appendChild(confirmationLNameLabel);
    confirmationLNameRow.appendChild(confirmationLNameData);
    confirmationTable.appendChild(confirmationLNameRow);

    const confirmationEmailRow = document.createElement('tr');
    const confirmationEmailLabel = document.createElement('td');
    const confirmationEmailData = document.createElement('td');
    confirmationEmailLabel.innerText = 'Email Address: ';
    confirmationEmailData.innerText = localStorage.getItem('Email');
    confirmationEmailRow.appendChild(confirmationEmailLabel);
    confirmationEmailRow.appendChild(confirmationEmailData);
    confirmationTable.appendChild(confirmationEmailRow);

    // const backToSignUpBtn = document.createElement('button');
    // backToSignUpBtn.innerText = 'Back to Sign Up';
    // signupConfirmationDiv.appendChild(backToSignUpBtn);
    // backToSignUpBtn.addEventListener('click', function () {
    //     loadSignup();
    // });

    const goToDashboardBtn = document.createElement('button');
    goToDashboardBtn.innerText = 'Go to Dashboard';
    signupConfirmationDiv.appendChild(goToDashboardBtn);

    mainSection.appendChild(signupConfirmationDiv);
}

function loadSignup() {
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
    signupFormTermsLabel.setAttribute('for', 'signup-form-agree');
    signupForm.appendChild(signupFormTerms);
    signupForm.appendChild(signupFormTermsLabel);

    // SIGNUP SUBMIT BUTTON
    const signupFormSubmit = document.createElement('button');
    signupFormSubmit.id = 'signup-form-submit';
    signupFormSubmit.setAttribute('type', 'submit');
    signupFormSubmit.innerText = 'Submit';
    signupForm.appendChild(signupFormSubmit);

    signupForm.addEventListener('submit', (e) => {
        let errorArr = [];
        let errorDiv = document.createElement('div');
        errorDiv.classList.add('error-div');
        signupDiv.appendChild(errorDiv);
        
        if (signupFormTerms.checked === false) {
            errorArr.push('You must agree to the terms');
        }
        if (signupFormPassword.value.length < 8) {
            errorArr.push('Password must be 8 or more characters');
        }

        if (errorArr.length > 0) {
            e.preventDefault();
            errorDiv.innerText = errorArr.join(', ');
        } else {
            e.preventDefault();
            localStorage.setItem('First Name', signupFormFName.value);
            localStorage.setItem('Last Name', signupFormLName.value);
            localStorage.setItem('Email', signupFormEmail.value);
            localStorage.setItem('Password', signupFormPassword.value);
            localStorage.setItem('Agree to terms?', signupFormTerms.checked);

            loadSignupConfirmation();
        }
    });
}

const loadSignin = () => {
    introBtnDiv.remove();
    const signinDiv = document.createElement('div');
    signinDiv.classList.add('signin-div');

    const signinHeader = document.createElement('h2');
    signinHeader.innerText = 'Please Sign In'
    signinHeader.classList.add('signin-header');
    signinDiv.appendChild(signinHeader);

    // SIGNIN FORM
    const signinForm = document.createElement('form');
    signinForm.id = 'signin-form';
    signinDiv.appendChild(signinForm);

    // SIGNIN FORM EMAIL
    const signinFormEmail = document.createElement('input');
    signinFormEmail.id = 'signin-form-email';
    signinFormEmail.setAttribute('type', 'email');
    signinFormEmail.setAttribute('placeholder', 'Email Address');
    signinForm.appendChild(signinFormEmail)

    // SIGNIN FORM PASSWORD
    const signinFormPassword = document.createElement('input');
    signinFormPassword.id = 'signin-form-password';
    signinFormPassword.setAttribute('type', 'password');
    signinFormPassword.setAttribute('placeholder', 'Password');
    signinForm.appendChild(signinFormPassword);

    // SIGNIN FORM BUTTON
    const signinFormSubmit = document.createElement('button');
    signinFormSubmit.id = 'signin-form-submit';
    signinFormSubmit.setAttribute('type', 'submit');
    signinFormSubmit.innerText = 'Sign In';
    signinForm.appendChild(signinFormSubmit)

    mainSection.appendChild(signinDiv);
}

btnSignup.addEventListener('click', () => { 
    loadSignup();
});

btnLogin.addEventListener('click', () => {
    loadSignin();
})