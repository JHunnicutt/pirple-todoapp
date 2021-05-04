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

// EVENT LISTENERS
window.addEventListener('load', () => {
  loadIntroHeader();
  loadIntroButtons();
});

introBtnSignup.addEventListener('click', () => {
  introBtnDiv.remove();
  loadSignup();
});

introBtnLogin.addEventListener('click', () => {
  introBtnDiv.remove();
  loadSignin();
});

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('jnh@mail.com'))['password']);
  if (signinFormEmail.value === JSON.parse(localStorage.getItem('jnh@mail.com'))['email'] && signinFormPassword.value === JSON.parse(localStorage.getItem('jnh@mail.com'))['password'] ) {
    console.log('loadDashboard()');
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
});