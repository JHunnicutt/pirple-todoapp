// VARIABLES
// main dom
const appBody = document.body;
const mainSection = document.getElementById('main-section');

// header
const headerBar = document.createElement('header');
const appTitle = document.createElement('h1');
const appTagline = document.createElement('h5');

// intro buttons
const introBtnDiv = document.createElement('div');
const introBtnLogin = document.createElement('button');
const introBtnSignup = document.createElement('button');

// signin form
const signinDiv = document.createElement('div');
const signinHeader = document.createElement('h2');
const signinForm = document.createElement('form');
const signinFormEmail = document.createElement('input');
const signinFormPassword = document.createElement('input');
const signinFormSubmit = document.createElement('button');
const signinErrorDiv = document.createElement('div');

// signup form
const signupDiv = document.createElement('div');
const signupHeader = document.createElement('h2');
const signupForm = document.createElement('form');
const signupFormFName = document.createElement('input');
const signupFormLName = document.createElement('input');
const signupFormEmail = document.createElement('input');
const signupFormPassword = document.createElement('input');
const signupFormTerms = document.createElement('input');
const signupFormTermsLabel = document.createElement('label');
const signupFormSubmit = document.createElement('button');
const termsDiv = document.createElement('div');
let signupErrorDiv = document.createElement('div');

// signup confirmation
const confirmationDiv = document.createElement('div');
const confirmationHeader = document.createElement('h2');
const confTableDiv = document.createElement('div');
const confLabelDiv = document.createElement('div');
const confLabelFName = document.createElement('p');
const confLabelLName = document.createElement('p');
const confLabelEmail = document.createElement('p');
const confInfoDiv = document.createElement('div');
const confInfoFName = document.createElement('p');
const confInfoLName = document.createElement('p');
const confInfoEmail = document.createElement('p');
const confSubmitButton = document.createElement('button');

// FUNCTIONS
const loadIntroHeader = () => {
  headerBar.classList.add('intro-header');
  appTitle.id = 'app-title';
  appTagline.id = 'tagline-description';

  appTitle.innerText = 'TODO APP';
  appTagline.innerText = 'Set it...don\'t forget it';

  headerBar.appendChild(appTitle);
  headerBar.appendChild(appTagline);
  mainSection.appendChild(headerBar);
}

const loadIntroButtons = () => {
  introBtnDiv.classList.add('btn-intro-div');
  introBtnLogin.classList.add('btn-lg', 'btn-teal');
  introBtnSignup.classList.add('btn-lg', 'btn-white');

  introBtnLogin.innerText = 'Login';
  introBtnSignup.innerText = 'Sign Up';

  introBtnDiv.appendChild(introBtnLogin);
  introBtnDiv.appendChild(introBtnSignup);
  mainSection.appendChild(introBtnDiv);
}

const loadSignin = () => {
  signinForm.id = 'signin-form';
  signinFormSubmit.id = 'signin-form-submit'
  signinForm.classList.add('app-form');
  signinDiv.classList.add('signin-div', 'form-div');
  signinFormEmail.classList.add('signin-email', 'form-input');
  signinFormPassword.classList.add('signin-password', 'form-input');
  signinFormSubmit.classList.add('btn-lg', 'btn-teal');

  signinFormEmail.setAttribute('type', 'text');
  signinFormEmail.setAttribute('placeholder', 'Email Address');
  signinFormPassword.setAttribute('type', 'password');
  signinFormPassword.setAttribute('placeholder', 'Password');
  signinFormSubmit.setAttribute('type', 'submit');

  signinHeader.innerText = 'Sign In';
  signinFormSubmit.innerText = 'Go to Dashboard';

  signinForm.appendChild(signinFormEmail);
  signinForm.appendChild(signinFormPassword);
  signinForm.appendChild(signinFormSubmit);
  signinDiv.appendChild(signinHeader);
  signinDiv.appendChild(signinForm);
  mainSection.appendChild(signinDiv);
}

const loadSignup = () => {
  signupForm.id = 'signup-form';
  signupFormTerms.id = 'agree-to-terms';
  signupFormSubmit.id = 'signup-form-submit';

  signupDiv.classList.add('signup-div', 'form-div');
  signupForm.classList.add('app-form');
  signupFormFName.classList.add('form-input');
  signupFormLName.classList.add('form-input');
  signupFormEmail.classList.add('form-input');
  signupFormPassword.classList.add('form-input');
  signupFormTerms.classList.add('form-checkbox');
  signupFormSubmit.classList.add('btn-lg');
  termsDiv.classList.add('terms-div');

  signupFormFName.setAttribute('type', 'text');
  signupFormFName.setAttribute('placeholder', 'First Name');
  signupFormFName.required = true;

  signupFormLName.setAttribute('type', 'text');
  signupFormLName.setAttribute('placeholder', 'Last Name');
  signupFormLName.required = true;

  signupFormEmail.setAttribute('type', 'text');
  signupFormEmail.setAttribute('placeholder', 'Email Address');
  signupFormEmail.required = true;

  signupFormPassword.setAttribute('type', 'password');
  signupFormPassword.setAttribute('placeholder', 'Password');
  signupFormPassword.required = true;

  signupFormTerms.setAttribute('type', 'checkbox');
  // signupFormTerms.required = true;

  signupFormTermsLabel.setAttribute('for', 'agree-to-terms');

  signupFormSubmit.setAttribute('type', 'submit');

  signupHeader.innerText = 'Sign Up';
  signupFormTermsLabel.innerText = 'I Agree to Terms of Use';
  signupFormSubmit.innerText = 'Sign Up';

  termsDiv.appendChild(signupFormTerms);
  termsDiv.appendChild(signupFormTermsLabel);
  signupForm.appendChild(signupFormFName);
  signupForm.appendChild(signupFormLName);
  signupForm.appendChild(signupFormEmail);
  signupForm.appendChild(signupFormPassword);
  signupForm.appendChild(termsDiv);
  signupForm.appendChild(signupFormSubmit);
  signupDiv.appendChild(signupHeader);
  signupDiv.appendChild(signupForm);
  mainSection.appendChild(signupDiv);
}

const loadSignupConfirmation = () => {
  confirmationDiv.classList.add('confirmation-div');
  confTableDiv.classList.add('conf-table-div');
  confLabelDiv.classList.add('conf-label-div');
  confLabelFName.classList.add('conf-label');
  confLabelLName.classList.add('conf-label');
  confLabelEmail.classList.add('conf-label');
  confInfoDiv.classList.add('conf-info-div');
  confInfoFName.classList.add('conf-label');
  confInfoLName.classList.add('conf-label');
  confInfoEmail.classList.add('conf-label');
  confSubmitButton.classList.add('btn-lg', 'btn-teal');

  confirmationHeader.innerText = 'Please Confirm Your Info'
  confLabelFName.innerText = 'First Name';
  confLabelLName.innerText = 'Last Name';
  confLabelEmail.innerText = 'Email Address';

  confInfoFName.innerText = JSON.parse(localStorage.getItem(signupFormEmail.value))['first name'];
  confInfoLName.innerText = JSON.parse(localStorage.getItem(signupFormEmail.value))['last name'];
  confInfoEmail.innerText = JSON.parse(localStorage.getItem(signupFormEmail.value))['email'];

  confSubmitButton.innerText = 'Go to Dashboard'

  confLabelDiv.appendChild(confLabelFName);
  confLabelDiv.appendChild(confLabelLName);
  confLabelDiv.appendChild(confLabelEmail);

  confInfoDiv.appendChild(confInfoFName);
  confInfoDiv.appendChild(confInfoLName);
  confInfoDiv.appendChild(confInfoEmail);

  confTableDiv.appendChild(confLabelDiv);
  confTableDiv.appendChild(confInfoDiv);

  confirmationDiv.appendChild(confirmationHeader);
  confirmationDiv.appendChild(confTableDiv);
  confirmationDiv.appendChild(confSubmitButton);

  mainSection.appendChild(confirmationDiv);
}

const loadDashboard = () => {
  // mainSection.innerText = 'dashboard';
  console.log('load dashboard')
  
}

// EVENT LISTENERS
window.addEventListener('load', () => {
  loadIntroHeader();
  loadIntroButtons();

});

introBtnSignup.addEventListener('click', () => {
  introBtnDiv.remove();
  loadSignup();
<<<<<<< HEAD
});

introBtnLogin.addEventListener('click', () => {
  introBtnDiv.remove();
  loadSignin();
});

=======
});

introBtnLogin.addEventListener('click', () => {
  introBtnDiv.remove();
  loadSignin();
});

>>>>>>> f937e557ba4a463bbd178e1e4f6bb9574c74c30b
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('jnh@mail.com'))['password']);
  if (signinFormEmail.value === JSON.parse(localStorage.getItem('jnh@mail.com'))['email'] && signinFormPassword.value === JSON.parse(localStorage.getItem('jnh@mail.com'))['password'] ) {
    loadDashboard();
  } else {
    console.log('signin failed');
    signinFormEmail.value = '';
    signinFormPassword.value = '';
  }
})

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let errorArr = [];
  signupErrorDiv.classList.add('error-div');

  if (signupFormPassword.value.length < 8) {
    errorArr.push('The password must be at least 8 characters in length');
  }
  if (signupFormTerms.checked === false){
    errorArr.push('You must agree to the Terms of Use');
  }
  if (errorArr.length > 0) {
    console.log('error');
    signupErrorDiv.innerText = errorArr.join(', ');
    signupDiv.appendChild(signupErrorDiv);
  } else {
    localStorage.setItem(signupFormEmail.value, JSON.stringify({
      'agree to terms?': signupFormTerms.checked,
      'first name': signupFormFName.value,
      'last name': signupFormLName.value,
      'email': signupFormEmail.value,
      'password': signupFormPassword.value,
      'lists': []
    })
    );
    signupDiv.remove();
    loadSignupConfirmation();
  }
<<<<<<< HEAD
});
=======
});

// APPENDS


// const mainSection = document.getElementById('main-section');
// const introBtnDiv = document.createElement('div');
// const btnLogin = document.createElement('button');
// const btnSignup = document.createElement('button');
// const signupDiv = document.createElement('div');
//
// window.addEventListener('load', () => {
//     introBtnDiv.classList.add('btn-login-div');
//     btnLogin.innerText = 'Login';
//     btnLogin.classList.add('btn-intro', 'btn-login');
//     btnSignup.innerText = 'Sign Up';
//     btnSignup.classList.add('btn-intro', 'btn-signup');
//     mainSection.appendChild(introBtnDiv);
//     introBtnDiv.appendChild(btnLogin);
//     introBtnDiv.appendChild(btnSignup);
// });
//
// // FUNCTIONS
// const loadSignupConfirmation = () => {
//     signupDiv.remove();
//     const signupConfirmationDiv = document.createElement('div');
//     signupConfirmationDiv.classList.add('signup-confirmation-div');
//
//     const signupConfirmation = document.createElement('h2');
//     signupConfirmation.innerText = 'Thank you for signing up'
//     signupConfirmationDiv.appendChild(signupConfirmation);
//
//     const confirmationParagraph = document.createElement('p');
//     confirmationParagraph.innerText = 'Please confirm your information below:'
//     signupConfirmationDiv.appendChild(confirmationParagraph);
//
//     const confirmationTable = document.createElement('table');
//     confirmationTable.classList.add('signup-info-confirmation-table');
//     signupConfirmationDiv.appendChild(confirmationTable);
//
//     const confirmationFNameRow = document.createElement('tr');
//     const confirmationFNameLabel = document.createElement('td');
//     const confirmationFNameData = document.createElement('td');
//     confirmationFNameLabel.innerText = 'First Name: ';
//     confirmationFNameData.innerText = localStorage.getItem('First Name');
//     confirmationFNameRow.appendChild(confirmationFNameLabel);
//     confirmationFNameRow.appendChild(confirmationFNameData);
//     confirmationTable.appendChild(confirmationFNameRow);
//
//     const confirmationLNameRow = document.createElement('tr');
//     const confirmationLNameLabel = document.createElement('td');
//     const confirmationLNameData = document.createElement('td');
//     confirmationLNameLabel.innerText = 'Last Name: ';
//     confirmationLNameData.innerText = localStorage.getItem('Last Name');
//     confirmationLNameRow.appendChild(confirmationLNameLabel);
//     confirmationLNameRow.appendChild(confirmationLNameData);
//     confirmationTable.appendChild(confirmationLNameRow);
//
//     const confirmationEmailRow = document.createElement('tr');
//     const confirmationEmailLabel = document.createElement('td');
//     const confirmationEmailData = document.createElement('td');
//     confirmationEmailLabel.innerText = 'Email Address: ';
//     confirmationEmailData.innerText = localStorage.getItem('Email');
//     confirmationEmailRow.appendChild(confirmationEmailLabel);
//     confirmationEmailRow.appendChild(confirmationEmailData);
//     confirmationTable.appendChild(confirmationEmailRow);
//
//     // const backToSignUpBtn = document.createElement('button');
//     // backToSignUpBtn.innerText = 'Back to Sign Up';
//     // signupConfirmationDiv.appendChild(backToSignUpBtn);
//     // backToSignUpBtn.addEventListener('click', function () {
//     //     loadSignup();
//     // });
//
//     const goToDashboardBtn = document.createElement('button');
//     goToDashboardBtn.innerText = 'Take Me to the Dashboard';
//     signupConfirmationDiv.appendChild(goToDashboardBtn);
//
//     mainSection.appendChild(signupConfirmationDiv);
// }
//
// function loadSignup() {
//     introBtnDiv.remove();
//     const signupHeader = document.createElement('h2');
//     signupHeader.innerText = 'Sign Up';
//     signupHeader.classList.add('signup-header');
//     signupDiv.appendChild(signupHeader);
//     signupDiv.classList.add('signup-div');
//
//     // SIGNUP FORM
//     const signupForm = document.createElement('form');
//     signupForm.id = 'signup-form';
//     signupDiv.appendChild(signupForm);
//     mainSection.appendChild(signupDiv);
//
//     // FIRST NAME INPUT
//     const signupFormFName = document.createElement('input');
//     signupFormFName.id = 'signup-form-f-name';
//     signupFormFName.classList.add('signup-field');
//     signupFormFName.setAttribute('type', 'text');
//     signupFormFName.setAttribute('placeholder', 'First Name');
//     signupFormFName.required = true;
//     signupForm.appendChild(signupFormFName);
//
//     // LAST NAME INPUT
//     const signupFormLName = document.createElement('input');
//     signupFormLName.id = 'signup-form-l-name';
//     signupFormLName.classList.add('signup-field');
//     signupFormLName.setAttribute('type', 'text');
//     signupFormLName.setAttribute('placeholder', 'Last Name');
//     signupFormLName.required = true;
//     signupForm.appendChild(signupFormLName);
//
//     // EMAIL INPUT
//     const signupFormEmail = document.createElement('input');
//     signupFormEmail.id = 'signup-form-email';
//     signupFormEmail.classList.add('signup-field');
//     signupFormEmail.setAttribute('type', 'email');
//     signupFormEmail.setAttribute('placeholder', 'Email Address');
//     signupFormEmail.required = true;
//     signupForm.appendChild(signupFormEmail);
//
//     // PASSWORD INPUT
//     const signupFormPassword = document.createElement('input');
//     signupFormPassword.id = 'signup-form-password';
//     signupFormPassword.classList.add('signup-field');
//     signupFormPassword.setAttribute('type', 'password');
//     signupFormPassword.setAttribute('placeholder', 'Password');
//     signupFormPassword.required = true;
//     signupForm.appendChild(signupFormPassword);
//
//     // AGREE TO TERMS INPUT
//     const signupFormTerms = document.createElement('input');
//     const signupFormTermsLabel = document.createElement('label');
//     signupFormTerms.id = 'signup-form-agree';
//     signupFormTerms.setAttribute('type', 'checkbox');
//     signupFormTermsLabel.innerText = 'Agree to terms';
//     signupFormTermsLabel.setAttribute('for', 'signup-form-agree');
//     signupForm.appendChild(signupFormTerms);
//     signupForm.appendChild(signupFormTermsLabel);
//
//     // SIGNUP SUBMIT BUTTON
//     const signupFormSubmit = document.createElement('button');
//     signupFormSubmit.id = 'signup-form-submit';
//     signupFormSubmit.setAttribute('type', 'submit');
//     signupFormSubmit.innerText = 'Submit';
//     signupForm.appendChild(signupFormSubmit);
//
//     signupForm.addEventListener('submit', (e) => {
//         let errorArr = [];
//         let errorDiv = document.createElement('div');
//         errorDiv.classList.add('error-div');
//         signupDiv.appendChild(errorDiv);
//
//         if (signupFormTerms.checked === false) {
//             errorArr.push('You must agree to the terms');
//         }
//         if (signupFormPassword.value.length < 8) {
//             errorArr.push('Password must be 8 or more characters');
//         }
//
//         if (errorArr.length > 0) {
//             e.preventDefault();
//             errorDiv.innerText = errorArr.join(', ');
//         } else {
//             e.preventDefault();
//             localStorage.setItem('first name', signupFormFName.value);
//             localStorage.setItem('last name', signupFormLName.value);
//             localStorage.setItem('email', signupFormEmail.value);
//             localStorage.setItem('password', signupFormPassword.value);
//             localStorage.setItem('agree to terms?', signupFormTerms.checked);
//
//             loadSignupConfirmation();
//         }
//     });
// }
//
// const loadSignin = () => {
//     introBtnDiv.remove();
//     const signinDiv = document.createElement('div');
//     signinDiv.classList.add('signin-div');
//
//     const signinHeader = document.createElement('h2');
//     signinHeader.innerText = 'Please Sign In'
//     signinHeader.classList.add('signin-header');
//     signinDiv.appendChild(signinHeader);
//
//     // SIGNIN FORM
//     const signinForm = document.createElement('form');
//     signinForm.id = 'signin-form';
//     signinDiv.appendChild(signinForm);
//
//     // SIGNIN FORM EMAIL
//     const signinFormEmail = document.createElement('input');
//     signinFormEmail.id = 'signin-form-email';
//     signinFormEmail.setAttribute('type', 'email');
//     signinFormEmail.setAttribute('placeholder', 'Email Address');
//     signinForm.appendChild(signinFormEmail)
//
//     // SIGNIN FORM PASSWORD
//     const signinFormPassword = document.createElement('input');
//     signinFormPassword.id = 'signin-form-password';
//     signinFormPassword.setAttribute('type', 'password');
//     signinFormPassword.setAttribute('placeholder', 'Password');
//     signinForm.appendChild(signinFormPassword);
//
//     // SIGNIN FORM BUTTON
//     const signinFormSubmit = document.createElement('button');
//     signinFormSubmit.id = 'signin-form-submit';
//     signinFormSubmit.setAttribute('type', 'submit');
//     signinFormSubmit.innerText = 'Sign In';
//     signinForm.appendChild(signinFormSubmit)
//
//     mainSection.appendChild(signinDiv);
//
//     signinFormSubmit.addEventListener('click', (e) => {
//         e.preventDefault();
//         if(signinFormEmail.value !== localStorage.getItem('email')) {
//             console.log('Email is inncorrect');
//         } else if(signinFormPassword.value !== localStorage.getItem('password')) {
//             console.log('Password is inncorrect');
//         } else {
//             loadDashboard();
//         }
//     });
// }
//
// // EVENT LISTENERS
//
// btnSignup.addEventListener('click', () => {
//     loadSignup();
// });
//
// btnLogin.addEventListener('click', () => {
//     loadSignin();
// })
>>>>>>> f937e557ba4a463bbd178e1e4f6bb9574c74c30b
