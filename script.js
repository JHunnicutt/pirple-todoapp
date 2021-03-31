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
});



// // SIGN UP FORM
// btnSignup.addEventListener('click', () => {
//     btnDiv.remove();
//     const signupHeader = document.createElement('h2');
//     signupHeader.innerText = 'Sign Up';
//     signupHeader.classList.add('signup-header');
//     // CREATE ELEMENTS
//     const signupForm = document.createElement('form');
//     const signupFormFName = document.createElement('input');
//     const signupFormLName = document.createElement('input');
//     const signupFormEmail = document.createElement('input');
//     const signupFormPassword = document.createElement('input');
//     const signupFormTerms = document.createElement('input');
//     const signupFormTermsLabel = document.createElement('label');
//     const signupFormSubmit = document.createElement('button');
//     // ATTRIBUTES
//     // FIRST NAME
//     signupFormFName.setAttribute('type', 'text');
//     signupFormFName.setAttribute('name', 'fname')
//     signupFormFName.setAttribute('placeholder', 'First Name');
//     signupFormFName.setAttribute('required', '');
//     // LAST NAME
//     signupFormLName.setAttribute('type', 'text');
//     signupFormLName.setAttribute('name', 'lname');
//     signupFormLName.setAttribute('placeholder', 'Last Name');
//     // EMAIL
//     signupFormEmail.setAttribute('type', 'email');
//     signupFormEmail.setAttribute('name', 'email');
//     signupFormEmail.setAttribute('placeholder', 'Email Address');
//     // PASSWORD
//     signupFormPassword.setAttribute('type', 'password');
//     signupFormPassword.setAttribute('name', 'password')
//     signupFormPassword.setAttribute('placeholder', 'Password');
//     // TERMS
//     signupFormTerms.setAttribute('type', 'checkbox');
//     signupFormTerms.setAttribute('name', 'agree-to-terms');
//     signupFormTermsLabel.setAttribute('for', 'agree-to-terms');
//     // SUBMIT
//     signupFormSubmit.setAttribute('type', 'submit');
//     signupFormSubmit.setAttribute('name', 'submit')
//     signupFormSubmit.setAttribute('form', 'submit-form');
//     // ADD ID AND CLASS LIST
//     signupForm.classList.add('signup-form');
//     signupFormFName.classList.add('signup-form-fname', 'signup-field');
//     signupFormLName.classList.add('signup-form-lname', 'signup-field');
//     signupFormEmail.classList.add('signup-form-email', 'signup-field');
//     signupFormPassword.classList.add('signup-form-password', 'signup-field');
//     signupFormSubmit.classList.add('signup-form-submit')
//     signupFormTerms.id = 'agree-to-terms';
//     signupForm.id = 'signup-form';
//     // INNER HTML
//     signupFormTermsLabel.innerHTML = 'Agree to terms';
//     signupFormSubmit.innerHTML = 'Submit';
//     // APPEND CHILDS
//     signupForm.appendChild(signupFormFName);
//     signupForm.appendChild(signupFormLName);
//     signupForm.appendChild(signupFormEmail);
//     signupForm.appendChild(signupFormPassword);
//     signupForm.appendChild(signupFormTerms);
//     signupForm.appendChild(signupFormTermsLabel);
//     signupForm.appendChild(signupFormSubmit);
//     signupDiv.appendChild(signupHeader);
//     signupDiv.appendChild(signupForm);
//     mainSection.appendChild(signupDiv);

//     // SUBMIT EVENT LISTENER
//     signupFormSubmit.addEventListener('click', () => {
//         localStorage.setItem('fname', signupFormFName.value);
//         localStorage.setItem('lname', signupFormLName.value);
//         localStorage.setItem('email', signupFormEmail.value);
//         localStorage.setItem('password', signupFormPassword.value);
//         localStorage.setItem('agreed', true);
//     });
// });