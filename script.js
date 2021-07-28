// VARIABLES
// main dom
const appBody = document.body;
const mainSection = document.getElementById('main-section');

// header
// const introHeaderBar = document.createElement('header');
// const appTitle = document.createElement('h1');
// const appTagline = document.createElement('h5');

// intro buttons
// const introBtnDiv = document.createElement('div');
// const introBtnLogin = document.createElement('button');
// const introBtnSignup = document.createElement('button');

// signin form
// const signinDiv = document.createElement('div');
// const signinHeader = document.createElement('h2');
// const signinForm = document.createElement('form');
// const signinFormEmail = document.createElement('input');
// const signinFormPassword = document.createElement('input');
// const signinFormSubmit = document.createElement('button');
// const signinErrorDiv = document.createElement('div');

// signup form
// const signupDiv = document.createElement('div');
const signupHeader = document.createElement('h2');
// const signupForm = document.createElement('form');
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
let sessionUser;

// dashboard
const dashboardHeaderBar = document.createElement('header');
// const dashboardNav = document.createElement('nav');
// const accountSettings = document.createElement('button');
const signOut = document.createElement('button');
const dashboardTitle = document.createElement('h1');
const dashboardList = document.createElement('div');
// const addListForm = document.createElement('form');
const addListBtn = document.createElement('button');
const addListInput = document.createElement('input');
const noListMsg = document.createElement('div');
const materialDesignUpArrow = document.createElement('span');
const noListMsgText = document.createElement('p');
// const listContainer = document.createElement('div');
const listUL = document.createElement('ul');

// list items page
// const todoNav = document.createElement('nav');
const todoBackButton = document.createElement('button');
const todoDiv = document.createElement('div');
// const todoHeaderDiv = document.createElement('div');
const todoHeader = document.createElement('h3');
// const addTodoForm = document.createElement('form');
const addTodoBtn = document.createElement('button');
const addTodoInput = document.createElement('input');
const todoList = document.createElement('ul');
// let todoListItem = document.createElement('li');

// account settings page
// const accountSettingsDiv = document.createElement('div');
const accountHeaderDiv = document.createElement('div');
const accountHeader = document.createElement('h3');
const userInfo = document.createElement('form');
const userFirstName = document.createElement('input');
const userLastName = document.createElement('input');
const userEmail = document.createElement('input');
const userPassword = document.createElement('input');
const userSubmit = document.createElement('input');


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

// new todo constructor
const Todo = function (name) {
  this.name = name;
  this.checked = false;
}

// TEMPLATES
const introHeader = document.createElement('header');

function introHeaderTemp() {
  introHeader.classList.add('intro-header');
  introHeader.innerHTML = `
    <h1 id='app-title'>TODO APP</h1>
    <h5 id='tagline-description'>Set it, don't forget it</h5>`;
  return introHeader;
}

const introButtons = document.createElement('div');

function introButtonsTemp() {
  introButtons.classList.add('btn-intro-div');
  introButtons.innerHTML = `
    <button id='login-btn' class='btn-lg btn-teal'>Login</button>
    <button id='signup-btn' class='btn-lg btn-white'>Sign Up</button>`;
  return introButtons;
}

// load login form
const loginDiv = document.createElement('div');
const loginForm = document.createElement('form');

function loginFormTemp() {
  loginDiv.classList.add('login-div', 'form-div');
  loginForm.id = 'login-form';
  loginForm.classList.add('app-form');

  loginDiv.innerHTML = `
  <h2>Log In</h2>`;

  loginForm.innerHTML = `
    <input type="text" placeholder='Email Address' class='login-email form-input' />
    <input type="password" placeholder='Password' class='login-password form-input' />
    <button id='login-form-submit' class='btn-lg btn-teal'>Log In</button>`;
  
  loginDiv.appendChild(loginForm);

  return loginDiv;
}

// load sign up form
const signupDiv = document.createElement('div');
const signupForm = document.createElement('form');

function signupFormTemp() {
  signupDiv.classList.add('signup-div', 'form-div');
  signupForm.id = 'signup-form'
  signupForm.classList.add('app-form');

  signupDiv.innerHTML = `<h2>Sign Up</h2>`;

  signupForm.innerHTML = `
    <input class='form-input' type="text" placeholder='First Name' required>
    <input class='form-input' type="text" placeholder='Last  Name' required>
    <input class='form-input' type="text" placeholder='Email Address' required>
    <input class='form-input' type="password" placeholder='Password' required>
    <div class='terms-div'>
      <input id='agree-to-terms' class='form-checkbox' type="checkbox">
      <label For="agree-to-terms">I Agree to Terms of Use</label>
    </div>
    <button id='signup-form-submit' class='btn-lg' type='submit'>Sign Up</button>`;

    signupDiv.appendChild(signupForm);

  return signupDiv;
}

// load the signup confirmation view
const signupConfirmationDiv = document.createElement('div');

function signupConfirmationTemp(firstName, lastName, emailAddress) {
  signupConfirmationDiv.classList.add('confirmation-div');

  signupConfirmationDiv.innerHTML = `
    <h2>Please Confirm Your Info</h2>
    <div class='conf-table-div'>
      <div class='conf-label-div'>
        <p class='conf-label'>First Name</p>
        <p class='conf-label'>Last Name</p>
        <p class='conf-label'>Email Address</p>
      </div>
      <div class='conf-info-div'>
        <p class='conf-label'>${firstName}</p>
        <p class='conf-label'>${lastName}</p>
        <p class='conf-label'>${emailAddress}</p>
      </div>
    </div>
    <button id='signup-confirm-btn' class='btn-lg btn-teal'>Go to Dashboard</button>`

  return signupConfirmationDiv;
}

// dashboard header 
const dashboardHeader = document.createElement('header');

function dashboardHeaderTemp() {
  dashboardHeader.classList.add('dashboard-header');

  dashboardHeader.innerHTML = `
    <h1 id='app-title-dashboard'>TODO APP</h1>`;

  return dashboardHeader;
}

// dashboard navigation bar
const primaryNav = document.createElement('nav');

function primaryNavTemp() {
  primaryNav.classList.add('primary-nav');

  primaryNav.innerHTML = `
    <button id='account-settings-btn' class='account-settings-btn btn-teal'>Account Settings</button>
    <button id='signout-btn' class='signout-btn btn-white'>Sign Out</button>`
  
  return primaryNav;
}

// add new list form and button
const addListForm = document.createElement('form');

function addListFormTemp() {
  addListForm.id = 'add-list-form';
  addListForm.classList.add('add-list-form');

  addListForm.innerHTML = `
      <button id='add-list-btn' class='btn-md btn-teal add-list-btn'>+</button>
      <input type="text" class='add-list-input' placeholder='list name'>`

  return addListForm;
}

// list container
const listContainer = document.createElement('div');

function listContainerTemp() {
  let userData = JSON.parse(localStorage.getItem(sessionUser));
  listContainer.classList.add('list-container');

  if (userData.lists.length < 1) {
    listContainer.innerHTML = `
    <div class='no-list-msg'>
      <span class='material-icons md-36'>arrow_upward</span>
      <p>Use the + button to add a list</p>
    </div>`;
  } else {
    listContainer.innerHTML = `
      <ul class='list-ul'>
        ${userData.lists.map((list) => `${listItemTemp(list.name)}`).join('')}
      </ul>`;
  }

  return listContainer;
}

function listItemTemp(name) {
  return `
    <li class='list-item'>
      <button class='list-item-btn'>
        <span class='item-text'>${name}</span>
      </button>
      <div class='list-management'>
        <button class='list-edit-btn'>
          <span class='material-icons list-edit-span'>mode_edit</span>
        </button>
        <button class='remove-item'>X</button>
      </div>
    </li>`;
}

let updatedListItem = document.createElement('li');

function updatedListItemTemp(name) {
  updatedListItem.classList.add('list-item');

  updatedListItem.innerHTML = `
    <button class='list-item-btn'>
      <span class='item-text'>${name}</span>
    </button>
    <div class='list-management'>
      <button class='list-edit-btn'>
        <span class='material-icons list-edit-span'>mode_edit</span>
      </button>
      <button class='remove-item'>X</button>
    </div>`;
    
  return updatedListItem;
}

function listItemEditTemp(name) {
  return `
  <li class='list-item-edit-view'>
    <form class='edit-list-form'>
      <input class='list-edit-input' type=text value='${name}' required>
    </form>
  </li>`;
}

// todo page or secondary nav
const secondaryNav = document.createElement('nav');

function secondaryNavTemp() {
  secondaryNav.classList.add('secondary-nav');
  secondaryNav.innerHTML = `
    <button class='secondary-back-btn btn-teal'>Back to Dashboard</button>
    <button class='account-settings-btn btn-teal'>Account Settings</button>
    <button class='signout-btn btn-white'>Sign Out</button>`;

  return secondaryNav;
}

// todo item header
const todoHeaderDiv = document.createElement('div');
function todoHeaderTemp(list) {
  todoHeaderDiv.classList.add('todo-header-div');
  todoHeaderDiv.innerHTML = `
    <h3 class='todoHeader'>${list}</h3>`;

  return todoHeaderDiv;
}

// add todo items form and button
const addTodoForm = document.createElement('form');

function addTodoFormTemp() {
  addTodoForm.classList.add('add-todo-form');
  addTodoForm.innerHTML = `
    <button class='add-todo-btn btn-sm btn-white' type='submit'>+</button>
    <input class='add-todo-input' type="text" placeholder = 'List Item' required/>`

  return addTodoForm;
}

// todo container and todo items

// initial variables to be used in the function
const todoContainer = document.createElement('div');
let todoItems;

function todoContainerTemp(listName) {
  // pull data from local storage and store as a variable
  let userData = JSON.parse(localStorage.getItem(sessionUser));

  // add class to containing div
  todoContainer.classList.add('todo-container');
  
  for (let list of userData.lists) {
    if (list.name === listName) {
      todoItems = list;
    }
  }

  todoContainer.innerHTML = `
    <ul class='todo-list'>
      ${todoItems.items.map((todo) => {
        return `${todoItemTemp(todo.name, todo.checked)}`
      }).join('')}
    </ul>`

    return todoContainer;
}

function todoItemTemp(name, check) {
  return `
    <li class='todo-item'>
      <div class=''checkbox-item>
        <input class='checkbox' type="checkbox" ${check ? `checked` : ``} />
        <span class='todo-text'>${name}</span>
      </div>
      <div class='todo-management'>
        <a href="" class='todo-edit-link'>
          <span class='material-icons todo-edit-btn'>mode_edit</span>
        </a>
        <button class='btn-remove remove-todo'>X</button>
      </div>
    </li>`
}

// updated todo item
let updatedTodoItem = document.createElement('li');

function updatedTodoItemTemp(name, check) {
  updatedTodoItem.classList.add('todo-item');
  updatedTodoItem.innerHTML = `
    <div class=''checkbox-item>
      <input class='checkbox' type="checkbox" ${check ? `checked` : ``} />
      <span class='todo-text'>${name}</span>
    </div>
    <div class='todo-management'>
      <a href="" class='todo-edit-link'>
        <span class='material-icons todo-edit-btn'>mode_edit</span>
      </a>
      <button class='btn-remove remove-todo'>X</button>
    </div>`;

  return updatedTodoItem;
}

// tertiary nav
const tertiaryNav = document.createElement('nav');

function tertiaryNavTemp() {
  tertiaryNav.classList.add('tertiary-nav')
  tertiaryNav.innerHTML = `
    <button class='secondary-back-btn btn-teal'>Back to Dashboard</button>
    <button id='signout-btn' class='signout-btn btn-white'>Sign Out</button>`;

  return tertiaryNav;
}

// account settings page
const accountSettingsHeader = document.createElement('div');

function accountSettingsHeaderTemp() {
  accountSettingsHeader.classList.add('account-settings-header-div');
  accountSettingsHeader.innerHTML = `
    <h3 class='account-settings-header'>Account Settings</h3>`;
  return accountSettingsHeader;
}

const accountSettingsForm = document.createElement('form');

function accountSettingsFormTemp() {
  let userData = JSON.parse(localStorage.getItem(sessionUser));
  accountSettingsForm.classList.add('user-info-form');

  accountSettingsForm.innerHTML = `
    <input type="text" class='user-first-name' value='${userData.firstName}' placeholder='First Name' required />
    <input type="text" class='user-last-name' value='${userData.lastName}' placeholder='Last Name' required />
    <input type="text" class='user-email' value='${userData.email}' placeholder='Email Address' required />
    <input type="password" class='user-password' value='${userData.password}' required />
    <input type="submit" class='account-settings-submit btn btn-lg btn-teal' value='Save & Return' />`;

  return accountSettingsForm;
}

// list edit view
let editListItem = document.createElement('li');
let editListForm = document.createElement('form');

// list item in edit view
function editlistItemTemp(name) {
  editListItem.classList.add('list-item-edit-view');
  editListItem.appendChild(editListFormTemp(name));

  return editListItem;
}

// list edit form
function editListFormTemp(formValue) {
  editListForm.classList.add('edit-list-form');
  editListForm.innerHTML = `
  <input class='list-edit-input' type="text" value='${formValue}' placeholder='List Name' required />`;

  // event listener placed inside of templating function so formValue is accessible
  editListForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formInput = e.target.children[0].value.trim();
    let listItemParent = e.target.parentElement.parentElement;
    let listItemChild = e.target.parentElement;
    updateListName(formValue, formInput, listItemParent, listItemChild);
  });
  return editListForm;
}

// todo edit view
let editTodoItem = document.createElement('li');
let editTodoForm = document.createElement('form');

// todo item in edit view
function editTodoItemTemp(name) {
  editTodoItem.classList.add('todo-item-edit-view');
  editTodoItem.appendChild(editTodoItemFormTemp(name));

  return editTodoItem;
}

function editTodoItemFormTemp(formValue) {
  editTodoForm.classList.add('todo-edit-form');
  editTodoForm.innerHTML = `
  <input class='todo-edit-input' type="text" value='${formValue}' required />`;

  editTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formInput = e.target.children[0].value.trim();
    let listTitle = e.target.parentElement.parentElement.parentElement.parentElement.children[2].children[0].innerText;
    let todoItemParent = e.target.parentElement.parentElement;
    let todoItemChild = e.target.parentElement;
    updateTodoName(formValue, formInput, listTitle, todoItemParent, todoItemChild);
  })

  return editTodoForm;
}











// FUNCTIONS 

// set signup inputs to local storage
function newUserLocalStorage(firstName, lastName, emailAddress, pass, agreeToTerms) {
  let newUser = new User(firstName, lastName, emailAddress, pass, agreeToTerms);
  localStorage.setItem(emailAddress, JSON.stringify(newUser));
}

function loginValidator(emailAddres, pass, form) {
  let userData = JSON.parse(localStorage.getItem(emailAddres));
  let errorArr = [];
  
  if (document.querySelector('.error-div')) {
    loginDiv.lastChild.remove();
  }
  
  try {
     // empty email field
    if (emailAddres === '' || emailAddres === null) {
      errorArr.push('Please enter an email address');
    }
    // empty password
    else if (pass === '' || pass === null) {
      errorArr.push('Please enter a password');
    }
    // incorrect password
    else if (emailAddres === userData['email'] && pass !== userData['password']) {
      errorArr.push('Invalid password')
    }
    // incorrect email
    else if (emailAddres !== userData['email']) {
      errorArr.push('Invalid email address')
    }
  } catch {
    errorArr.push('Invalid login')
  }
  if (errorArr.length > 0) {
    let errorDiv = document.createElement('div');
    errorDiv.classList.add('error-div');
    errorDiv.innerHTML = `
      <ul>
      ${errorArr.map((error) => `<li>${error}</li>`).join('')}
      </ul>`;
    loginDiv.appendChild(errorDiv);
    form.children[0].value = '';
    form.children[1].value = '';
    errorArr = [];
  } else {
    sessionUser = emailAddres;
    mainSection.replaceChild(dashboardHeaderTemp(), introHeaderTemp());
    mainSection.replaceChild(primaryNavTemp(), loginFormTemp());
    mainSection.appendChild(addListFormTemp());
    mainSection.appendChild(listContainerTemp());
  }
}

// validates signup form, displays error and loads confirmation
function signupValidator(fname, lname, email, password, terms, form) {
  let errorArr = [];

  if (document.querySelector('.error-div')) {
    signupDiv.lastChild.remove();
  }

  if (password.length < 8) {
    errorArr.push('Your password must be 8 or more characters');
  }
  if (!terms) {
    errorArr.push('You must agree to the terms of use')
  }
  if (JSON.parse(localStorage.getItem(email))) {
    errorArr.push('This email is already is use');
  }
  if (errorArr.length > 0) {
    let errorDiv = document.createElement('div');
    errorDiv.classList.add('error-div');
    errorDiv.innerHTML = `
      <ul>
      ${errorArr.map((error) => `<li>${error}</li>`).join('')}
      </ul>`;
    signupDiv.appendChild(errorDiv);
    errorArr = [];
  } else {
    sessionUser = email;
    newUserLocalStorage(fname, lname, email, password, terms);
    mainSection.replaceChild(signupConfirmationTemp(fname, lname, email), signupFormTemp());
  }
}

// add list items to local storage
function addListToLocalStorage(list) {
  let userData = JSON.parse(localStorage.getItem(sessionUser));

  userData.lists.push(new List(list));

  localStorage.setItem(sessionUser, JSON.stringify(userData));
}

// add todo to local storage
function addTodosToLocalStorage (todoItem, listItem) {
  let userData = JSON.parse(localStorage.getItem(sessionUser));

  for (let list of userData.lists) {
    if (list.name === listItem) {
      list.items.push(new Todo(todoItem));
      localStorage.setItem(sessionUser, JSON.stringify(userData));
    }
  }
}

// delete a list from the dashboard UI
function removeList(listItem) {
  listItem.remove();
  removeListFromLocalStorage(listItem.children[0].children[0].textContent);

  if (!document.querySelector('.list-item')) {
    listContainer.innerHTML = `
    <div class='no-list-msg'>
      <span class='material-icons md-36'>arrow_upward</span>
      <p>Use the + button to add a list</p>
    </div>`
  } else {
    return;
  }
}

// delete list items from local storage
function removeListFromLocalStorage (listItem) {
  let userData = JSON.parse(localStorage.getItem(sessionUser));
  let userLists = userData.lists;

  for(let i in userLists) {
    
    if (listItem === userLists[i].name) {
      userLists.splice(i, 1);
      localStorage.setItem(sessionUser, JSON.stringify(userData));
    }
  }
}

// delete a todo item from the dashboard UI
function removeTodo(todoItem, listName) {
  todoItem.parentElement.parentElement.remove();
  removeTodoFromLocalStorage(todoItem.parentElement.parentElement.children[0].children[1].textContent, listName);
}

// delete a todo item from local storage
function removeTodoFromLocalStorage(todoItem, listName) {
  let userData = JSON.parse(localStorage.getItem(sessionUser));

  for (let i of userData.lists) {
    if (i.name === listName) {
      let listArr = i.items;
      let todoIndex = listArr.indexOf(todoItem);
      listArr.splice(todoIndex, 1);
      localStorage.setItem(sessionUser, JSON.stringify(userData));
    }
  }
}

function updateUserInfo(first, last, email, password) {
  let userData = JSON.parse(localStorage.getItem(sessionUser));
  localStorage.removeItem(sessionUser);
  sessionUser = email;
  userData.firstName = first;
  userData.lastName = last;
  userData.email = email;
  userData.password = password;
  localStorage.setItem(sessionUser, JSON.stringify(userData));
}

function checkedStatusLocalStorage(listName, itemName) {
  const userData = JSON.parse(localStorage.getItem(sessionUser));

  // loop through list items
  for (let list of userData.lists) {
    if (list.name === listName) {
      // loop through todo items
      for (let item of list.items) {
        if (item.name === itemName) {
          // if checked is false, mark true
          if (item.checked === false) {
            item.checked = true;
            localStorage.setItem(sessionUser, JSON.stringify(userData));
            return;
          }
          // if checked is true, mark false
          if (item.checked === true) {
            item.checked = false;
            localStorage.setItem(sessionUser, JSON.stringify(userData));
            return;
          }
        }
      }
    }
  }
}

function updateListName(oldList, newList, parent, child) {
  let userData = JSON.parse(localStorage.getItem(sessionUser));

  for (let list of userData.lists) {
    if (list.name == oldList) {
      list.name = newList;
      localStorage.setItem(sessionUser, JSON.stringify(userData));
    }
  }
  parent.replaceChild(updatedListItemTemp(newList), child);
}

function updateTodoName(oldTodo, newTodo, listName, parent, child) {
  let userData = JSON.parse(localStorage.getItem(sessionUser));

  for (let list of userData.lists) {
    if (list.name === listName) {
      for (let todo of list.items) {
        if (todo.name === oldTodo) {
          todo.name = newTodo;
          localStorage.setItem(sessionUser, JSON.stringify(userData));
          parent.replaceChild(updatedTodoItemTemp(newTodo, todo.checked), child);
        }
      }
    }
  }
}

// EVENT LISTENERS

mainSection.appendChild(introHeaderTemp());
mainSection.appendChild(introButtonsTemp());

// load signin/signup page
introButtons.addEventListener('click', (e) => {
  if (e.target.id === 'login-btn') {
    mainSection.replaceChild(loginFormTemp(), introButtonsTemp());
  }
  if (e.target.id === 'signup-btn') {
    mainSection.replaceChild(signupFormTemp(), introButtonsTemp());
  }
});

// submitting the login form
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let emailInput = e.target.children[0].value.toLowerCase().trim();
  let passwordInput = e.target.children[1].value.trim();
  loginValidator(emailInput, passwordInput, e.target);
});

// submitting the signup form
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let inputFName = e.target.children[0].value.trim();
  let inputLName = e.target.children[1].value.trim();
  let inputEmail = e.target.children[2].value.toLowerCase().trim();
  let inputPassword = e.target.children[3].value.trim();
  let agreeToTerms = e.target.children[4].children[0].checked;
  signupValidator(inputFName, inputLName, inputEmail, inputPassword, agreeToTerms, e.target);
});

// confirming user info and signing into the dashboard
signupConfirmationDiv.addEventListener('click', (e) => {
  if (e.target.id === 'signup-confirm-btn') {
    mainSection.replaceChild(dashboardHeaderTemp(), introHeaderTemp());
    mainSection.replaceChild(primaryNavTemp(), signupConfirmationTemp());
    mainSection.appendChild(addListFormTemp());
    mainSection.appendChild(listContainerTemp());
  }
})

// add list items
addListForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let formInput = e.target.children[1].value.trim();
  // remove existing DOM element
  listContainer.remove();
  // update local storage
  addListToLocalStorage(formInput);
  // go into list item
  mainSection.replaceChild(secondaryNavTemp(), primaryNavTemp());
  mainSection.replaceChild(todoHeaderTemp(formInput), addListFormTemp());
  mainSection.appendChild(addTodoFormTemp());
  mainSection.appendChild(todoContainerTemp(formInput));
  // clear form of input value
  e.target.children[1].value = '';
});

// list item interaction
listContainer.addEventListener('click', (e) => {
  e.preventDefault();
  // deleting a list item
  if (e.target.classList.contains('remove-item')) {
    removeList(e.target.parentElement.parentElement);
  }
  // entering the list item
  if (e.target.classList.contains('item-text')) {
    mainSection.replaceChild(secondaryNavTemp(), primaryNavTemp());
    mainSection.replaceChild(todoHeaderTemp(e.target.innerText), addListFormTemp());
    mainSection.replaceChild(addTodoFormTemp(), listContainerTemp());
    mainSection.appendChild(todoContainerTemp(e.target.innerText));
  }
  // editing the item's text
  if (e.target.classList.contains('list-edit-span')) {
    let listParent = e.target.parentElement.parentElement.parentElement.parentElement;
    let listItem = e.target.parentElement.parentElement.parentElement;
    let listName = e.target.parentElement.parentElement.parentElement.children[0].children[0].innerText;

    listParent.replaceChild(editlistItemTemp(listName), listItem);
  }
});



// add todo items
addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let currentList = todoHeaderDiv.children[0].innerText;
  // remove existing DOM element
  todoContainer.remove();
  // update local storage
  addTodosToLocalStorage(e.target.children[1].value, currentList);
  // add DOM element with updated todo item
  mainSection.appendChild(todoContainerTemp(currentList));
  // clear form of input value
  e.target.children[1].value = '';
});

// todo item interaction
todoContainer.addEventListener('click', (e) => {
  let currentList = todoHeaderDiv.children[0].innerText;
  // deleting todo item
  if (e.target.classList.contains('remove-todo')) {
    removeTodo(e.target, currentList);
  }
  // checking todo box
  if (e.target.classList.contains('checkbox')) {
    checkedStatusLocalStorage(todoHeaderDiv.children[0].textContent, e.target.nextElementSibling.textContent);
  }
  // editing todo item
  if (e.target.classList.contains('todo-edit-btn')) {
    e.preventDefault();
    let todoParent = e.target.parentElement.parentElement.parentElement.parentElement;
    let todoItem = e.target.parentElement.parentElement.parentElement;
    let todoName = e.target.parentElement.parentElement.parentElement.children[0].children[1].innerText;
    todoParent.replaceChild(editTodoItemTemp(todoName), todoItem);
  }
});

// submitting new account info 
accountSettingsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  updateUserInfo(
    e.target.children[0].value.trim(),
    e.target.children[1].value.trim(),
    e.target.children[2].value.toLowerCase().trim(),
    e.target.children[3].value.trim()
  );
  mainSection.replaceChild(primaryNavTemp(), tertiaryNavTemp());
  mainSection.replaceChild(addListFormTemp(), accountSettingsHeaderTemp());
  mainSection.replaceChild(listContainerTemp(), accountSettingsFormTemp());
});

// primary nav intergation
primaryNav.addEventListener('click', (e) => {
// account settings
  if (e.target.classList.contains('account-settings-btn')) {
    mainSection.replaceChild(tertiaryNavTemp(), primaryNavTemp());
    addListForm.remove();
    listContainer.remove();
    mainSection.appendChild(accountSettingsHeaderTemp());
    mainSection.appendChild(accountSettingsFormTemp());
  }
  // signout
  if (e.target.classList.contains('signout-btn')) {
    while(mainSection.firstChild) {
      mainSection.removeChild(mainSection.firstChild);
    }
    mainSection.appendChild(introHeaderTemp());
    mainSection.appendChild(introButtonsTemp());
  }
});

// secondary nav interagtion
secondaryNav.addEventListener('click', (e) => {
  // back button
  if (e.target.classList.contains('secondary-back-btn')) {
    mainSection.replaceChild(primaryNavTemp(), secondaryNavTemp());
    todoHeaderDiv.remove();
    mainSection.replaceChild(addListFormTemp(), addTodoFormTemp());
    mainSection.replaceChild(listContainerTemp(), todoContainerTemp());
  }
  // account settings
  if (e.target.classList.contains('account-settings-btn')) {
    mainSection.replaceChild(tertiaryNavTemp(), secondaryNavTemp());
    todoHeaderDiv.remove()
    addTodoForm.remove();
    todoContainer.remove();
    mainSection.appendChild(accountSettingsHeaderTemp());
    mainSection.appendChild(accountSettingsFormTemp());
  }
  // signout
  if (e.target.classList.contains('signout-btn')) {
    while(mainSection.firstChild) {
      mainSection.removeChild(mainSection.firstChild);
    }
    mainSection.appendChild(introHeaderTemp());
    mainSection.appendChild(introButtonsTemp());
  }
});

// tertiary nav integration
tertiaryNav.addEventListener('click', (e) => {
  // back to dashboard
  if (e.target.classList.contains('secondary-back-btn')) {
    mainSection.replaceChild(primaryNavTemp(), tertiaryNavTemp());
    mainSection.replaceChild(addListFormTemp(), accountSettingsHeaderTemp());
    mainSection.replaceChild(listContainerTemp(), accountSettingsFormTemp());
  }
  // signout
  if (e.target.classList.contains('signout-btn')) {
    while(mainSection.firstChild) {
      mainSection.removeChild(mainSection.firstChild);
    }
    mainSection.appendChild(introHeaderTemp());
    mainSection.appendChild(introButtonsTemp());
  }
});