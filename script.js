// VARIABLES
// main dom
const appBody = document.body;
const mainSection = document.getElementById('main-section');

// header
const introHeaderBar = document.createElement('header');
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

// dashboard
const dashboardHeaderBar = document.createElement('header');
const dashboardTitle = document.createElement('h1');
const dashboardList = document.createElement('div');
const addListForm = document.createElement('form');
const addListBtn = document.createElement('button');
const addListInput = document.createElement('input');
const noListMsg = document.createElement('div');
const materialDesignUpArrow = document.createElement('span');
const noListMsgText = document.createElement('p');
const listContainer = document.createElement('div');
const listUL = document.createElement('ul');

// list items page
const todoNav = document.createElement('nav');
const todoBackButton = document.createElement('a');
const todoDiv = document.createElement('div');
const todoHeaderDiv = document.createElement('div');
const todoHeader = document.createElement('h3');
const addTodoForm = document.createElement('form');
const addTodoBtn = document.createElement('button');
const addTodoInput = document.createElement('input');
const todoList = document.createElement('ul');
// let todoListItem = document.createElement('li');


// new user constructor
let userName;
let User = function (firstName, lastName, email, password, agreedToTerms) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.email = email,
  this.password = password,
  this.agreedToTerms = agreedToTerms,
  this.lists = []
}

// new list constructor
const List = function (name) {
  this.name = name;
  this.items = [];
};

// FUNCTIONS
const loadIntroHeader = () => {
  introHeaderBar.classList.add('intro-header');
  appTitle.id = 'app-title';
  appTagline.id = 'tagline-description';

  appTitle.innerText = 'TODO APP';
  appTagline.innerText = 'Set it...don\'t forget it';

  introHeaderBar.appendChild(appTitle);
  introHeaderBar.appendChild(appTagline);
  mainSection.appendChild(introHeaderBar);
}

// intro signin and sign up buttons
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

// load signin form
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

// load sign up form
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

// load the signup confirmation view
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

  confInfoFName.innerText = JSON.parse(localStorage.getItem(userName))['firstName'];
  confInfoLName.innerText = JSON.parse(localStorage.getItem(userName))['lastName'];
  confInfoEmail.innerText = JSON.parse(localStorage.getItem(userName))['email'];

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

// add items to list
function addListToLocalStorage () {
  let listInput = addListInput.value;
  let userData = JSON.parse(localStorage.getItem('jnh@mail.com'));

  userData.lists.push(new List(listInput));
  localStorage.setItem('jnh@mail.com', JSON.stringify(userData));
}

function addListToDashboard () {
  // create a variable from the local storage lists array
  const userData = JSON.parse(localStorage.getItem('jnh@mail.com'));

  // list container
  listUL.classList.add('list-ul');

  // remove existing list when returning to dashboard
  while(listUL.firstChild) {
    listUL.removeChild(listUL.firstChild);
  }

  // loop through array and assign each item a class and append to a div
  for (let i of userData.lists) {

    // list item
    let listItem = document.createElement('li');
    listItem.classList.add('list-item');
    // item link
    let listLink = document.createElement('a');
    listLink.classList.add('list-link');
    listLink.href = ' ';
    // item text
    let listText = document.createElement('span');
    listText.classList.add('item-text');
    // item button
    let listRemove = document.createElement('button');
    listRemove.classList.add('remove-item');

    listText.innerText = i.name;
    listRemove.innerText = 'X'

    listLink.appendChild(listText);
    listItem.appendChild(listLink);
    listItem.appendChild(listRemove);
    listUL.appendChild(listItem);
  }
  // append div to dashboard
  listContainer.appendChild(listUL);

  if (Object.values(userData.lists).length > 0) {
    removeNoListMsg()
  }
}

// remove list items from local storage
function removeListFromLocalStorage (list) {
  let userData = JSON.parse(localStorage.getItem('jnh@mail.com'));
  let userLists = userData.lists;
  // console.log(userLists);
  for(let i in userLists) {
    
    if (list.textContent === userLists[i].name) {
      userLists.splice(i, 1);
      localStorage.setItem('jnh@mail.com', JSON.stringify(userData));
    }
  }

  if (Object.values(userData.lists).length < 1) {
    loadNoListMsg();
  }
}

// delete a list from the dashboard UI
function removeList (e) {
  e.target.parentElement.remove();
  removeListFromLocalStorage(e.target.parentElement.children[0].children[0]);
}

// load the message when no lists are present on the dashboard
const loadNoListMsg = () => {
  noListMsg.classList.add('no-list-msg');
  materialDesignUpArrow.classList.add('material-icons', 'md-36');
  materialDesignUpArrow.innerText = 'arrow_upward';
  noListMsgText.innerText = ' Use the + button to add a list';
  noListMsg.appendChild(materialDesignUpArrow);
  noListMsg.appendChild(noListMsgText);
  listContainer.appendChild(noListMsg);
}
// removes the message directing people to add a list
function removeNoListMsg () {
  noListMsg.remove();
}

function addItemToLocalStorage () {
  let listName = todoHeader.innerText;
  let listInput = addTodoInput.value;
  let userData = JSON.parse(localStorage.getItem('jnh@mail.com'));
  let userLists = userData.lists;

  for (let list of userLists) {
    if (list.name === listName) {
      list.items.push(listInput);
      localStorage.setItem('jnh@mail.com', JSON.stringify(userData));
    }
  }
}

function addItemsToListPage () {
  // create a variable from the local storage lists array
  let listName = todoHeader.innerText;
  let userData = JSON.parse(localStorage.getItem('jnh@mail.com'));
  let userLists = userData.lists;

  // remove existing todos when returning to list
  while(todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  
  // loop through array and assign each item a class and append to a div
  for (let list of userLists) {
    if (list.name === listName) {
      let listItems = list.items;
      listItems.forEach(item => {
        let todoItem = document.createElement('li');
        let checkboxItem = document.createElement('div');
        let checkbox = document.createElement('input');
        let itemText = document.createElement('span');
        let deleteButton = document.createElement('button');
        itemText.innerText = item;
        deleteButton.innerText = 'X';
        checkbox.setAttribute('type', 'checkbox');
        checkboxItem.appendChild(checkbox);
        checkboxItem.appendChild(itemText);
        checkboxItem.appendChild(deleteButton);
        todoItem.appendChild(checkboxItem);
        todoList.appendChild(todoItem);
      });
    }
  }
  todoDiv.appendChild(todoList);
}

// load the add new list form
const loadNewListForm = () => {
  dashboardList.classList.add('dashboard-list-div');
  addListForm.classList.add('add-list-form');
  addListBtn.classList.add('btn-md', 'btn-teal', 'add-list-btn');
  addListInput.classList.add('add-list-input');
  listContainer.classList.add('list-container');

  addListInput.setAttribute('type', 'text');
  addListInput.setAttribute('placeholder', 'List Name');
  
  addListBtn.innerText = '+';
  
  addListForm.appendChild(addListBtn);
  addListForm.appendChild(addListInput);

  dashboardList.appendChild(addListForm);
  dashboardList.appendChild(listContainer);

  mainSection.appendChild(dashboardList);
}

// load the dashboard app header
const loadDashboardHeader = () => {
  dashboardTitle.id = 'app-title-dashboard';
  dashboardHeaderBar.classList.add('dashboard-header');

  dashboardTitle.innerText = 'TODO APP';

  dashboardHeaderBar.appendChild(dashboardTitle);
  mainSection.appendChild(dashboardHeaderBar);
}

// load the dashboard
const loadDashboard = () => {
  introHeaderBar.remove();
  loadDashboardHeader();
  loadNewListForm();
  
  let userData = JSON.parse(localStorage.getItem('jnh@mail.com'));
  if (Object.values(userData.lists).length < 1) {
    loadNoListMsg();
  }
  if (Object.values(userData.lists).length > 0){
    removeNoListMsg();
    addListToDashboard();
  }
}

// creating the list page of to-do items
function loadListPage(list) {
  // removal of dashboard elements
  dashboardList.remove();
  // add outer ui elements
  todoDiv.classList.add('todo-div');
  todoNav.classList.add('todo-nav');
  todoBackButton.classList.add('todo-back-btn');
  todoBackButton.innerText = 'back to dashboard';
  todoBackButton.href = '';
  // add list name
  todoHeaderDiv.classList.add('todo-header-div');
  todoHeader.classList.add('todo-header');
  todoHeader.innerText = list;
  // add todo form
  
  addTodoForm.classList.add('add-todo-form');
  addTodoBtn.classList.add('add-todo-btn');
  addTodoBtn.innerText = '+';
  addTodoInput.classList.add('add-todo-input');
  addTodoBtn.setAttribute('type', 'submit');
  addTodoInput.setAttribute('type', 'text');
  addTodoInput.setAttribute('placeholder', 'List Item');

  // append to ui
  todoNav.appendChild(todoBackButton);
  addTodoForm.appendChild(addTodoBtn);
  addTodoForm.appendChild(addTodoInput);
  todoHeaderDiv.appendChild(todoHeader);
  todoDiv.appendChild(todoHeaderDiv);
  todoDiv.appendChild(addTodoForm);
  mainSection.appendChild(todoNav);
  mainSection.appendChild(todoDiv);
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
//   userName = signupFormEmail.value;
//   signinErrorDiv.classList.add('error-div');

//   if (signinFormEmail.value === '') {
//     signinErrorDiv.innerText = 'Please enter an email';
//     signinDiv.appendChild(signinErrorDiv);
//     return;
//   }
//   if (signinFormPassword.value === '') {
//     signinErrorDiv.innerText = 'Please enter a password';
//     signinDiv.appendChild(signinErrorDiv);
//     return;
//   }
//   if (signinFormEmail.value !== JSON.parse(localStorage.getItem('jnh@mail.com'))['email'] || signinFormPassword.value !== JSON.parse(localStorage.getItem('jnh@mail.com'))['password'] ) {
//     signinErrorDiv.innerText = 'Incorrect email or password';
//     signinDiv.appendChild(signinErrorDiv);
//     return;
//   }
//   if (signinFormEmail.value === JSON.parse(localStorage.getItem('jnh@mail.com'))['email'] && signinFormPassword.value === JSON.parse(localStorage.getItem('jnh@mail.com'))['password'] ) {
//     signinDiv.remove();
//     loadDashboard();
//   }
signinDiv.remove();
loadDashboard();
});


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
    userName = signupFormEmail.value
    let newUser = new User(signupFormFName.value, signupFormLName.value, signupFormEmail.value, signupFormPassword.value, signupFormTerms.checked);
    localStorage.setItem(userName, JSON.stringify(newUser));
    signupDiv.remove();
    loadSignupConfirmation();
  }
});

confSubmitButton.addEventListener('click', (e) => {
  e.preventDefault();
  confirmationDiv.remove();
  loadDashboard();
});

addListForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (addListInput.value === '') {
    alert('Please type in a list name');
    return;
  } else {
    addListToLocalStorage();
    while(listUL.firstChild) {
      listUL.removeChild(listUL.firstChild);
    }
    addListToDashboard();
    addListInput.value = '';
  }
});

listUL.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('remove-item')) {
    removeList(e);
  }
  if (e.target.classList.contains('item-text')) {
    loadListPage(e.target.textContent);
  }
});

todoBackButton.addEventListener('click', (e) => {
  e.preventDefault();
  todoNav.remove();
  todoDiv.remove();
  loadDashboard();
});

addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addItemToLocalStorage();
  addItemsToListPage();
  addTodoInput.value = '';
});