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
const signupDiv = document.createElement('div');
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
const dashboardNav = document.createElement('nav');
const accountSettings = document.createElement('button');
const signOut = document.createElement('button');
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
const todoBackButton = document.createElement('button');
const todoDiv = document.createElement('div');
const todoHeaderDiv = document.createElement('div');
const todoHeader = document.createElement('h3');
const addTodoForm = document.createElement('form');
const addTodoBtn = document.createElement('button');
const addTodoInput = document.createElement('input');
const todoList = document.createElement('ul');
// let todoListItem = document.createElement('li');

// account settings page
const accountSettingsDiv = document.createElement('div');
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

function introHeader() {
  return `
  <header class="intro-header">
    <h1 id="app-title">TODO APP</h1>
    <h5 id="tagline-description">Set it, don't forget it</h5>
  </header>`;
}

function introButtons() {
  return `
  <div class='btn-intro-div'>
    <button id='login-btn' class='btn-lg btn-teal'>Login</button>
    <button id='signup-btn' class='btn-lg btn-white'>Sign Up</button>
  </div>`;
}

// load signin form
function signinForm() {
  return `
  <div class='signin-div form-div'>
    <h2>Sign In</h2>
    <form id='signin-form' class='app-form'>
      <input type="text" placeholder='Email Address' class='signin-email form-input' />
      <input type="password" placeholder='Password' class='signin-password form-input' />
      <button id='signin-form-submit' class='btn-lg btn-teal'>Sign In</button>
    </form>
  </div>`
}

// load sign up form
function signupForm() {
  return `
  <div class='signup-div form-div'>
    <h2>Sign Up</h2>
    <form id='signup-form' class='app-form'>
    <input class='form-input' type="text" placeholder='First Name' required>
    <input class='form-input' type="text" placeholder='Last  Name' required>
    <input class='form-input' type="text" placeholder='Email Address' required>
    <input class='form-input' type="password" placeholder='Password' required>
    <div class='terms-div'>
      <input id='agree-to-terms' class='form-checkbox' type="checkbox">
      <label For="agree-to-terms">I Agree to Terms of Use</label>
    </div>
    <button id='signup-form-submit' class='btn-lg' type='submit'>Sign Up</button>
    </form>
  </div>`;
}

// load the signup confirmation view
function signupConfirmation(firstName, lastName, emailAddress) {
  return `
  <div class='confirmation-div'>
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
    <button class='btn-lg btn-teal'>Go to Dashboard</button>
  </div>`
}

// add items to list
function addListToLocalStorage () {
  let listInput = addListInput.value;
  let userData = JSON.parse(localStorage.getItem(sessionUser));

  userData.lists.push(new List(listInput.trim()));
  localStorage.setItem(sessionUser, JSON.stringify(userData));
}

function addListToDashboard () {
  // create a variable from the local storage lists array
  const userData = JSON.parse(localStorage.getItem(sessionUser));

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
    // list managment div
    let listManagement = document.createElement('div');
    listManagement.classList.add('list-management');
    // edit button
    let listEditLink = document.createElement('a');
    let listEditButton = document.createElement('span');
    listEditLink.href = '';
    listEditLink.classList.add('list-edit-link');
    listEditButton.classList.add('material-icons', 'list-edit-btn');
    listEditButton.innerText = 'mode_edit';
    // item button
    let listRemove = document.createElement('button');
    listRemove.classList.add('remove-item');

    listText.innerText = i.name;
    listRemove.innerText = 'X'

    listLink.appendChild(listText);
    listEditLink.appendChild(listEditButton);
    listManagement.appendChild(listEditLink);
    listManagement.appendChild(listRemove);
    listItem.appendChild(listLink);
    listItem.appendChild(listManagement);
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
  let userData = JSON.parse(localStorage.getItem(sessionUser));
  let userLists = userData.lists;
  // console.log(userLists);
  for(let i in userLists) {
    
    if (list.textContent === userLists[i].name) {
      userLists.splice(i, 1);
      localStorage.setItem(sessionUser, JSON.stringify(userData));
    }
  }

  if (Object.values(userData.lists).length < 1) {
    loadNoListMsg();
  }
}

// delete a list from the dashboard UI
function removeList (e) {
  e.target.parentElement.parentElement.remove();
  removeListFromLocalStorage(e.target.parentElement.parentElement.children[0].children[0]);
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

function addTodosToLocalStorage () {
  let listName = todoHeader.innerText;
  let listInput = addTodoInput.value;
  let userData = JSON.parse(localStorage.getItem(sessionUser));
  let userLists = userData.lists;

  for (let list of userLists) {
    if (list.name === listName) {
      list.items.push(new Todo(listInput));
      localStorage.setItem(sessionUser, JSON.stringify(userData));
    }
  }
}

function addTodosToListPage () {
  // create a variable from the local storage lists array
  let listName = todoHeader.innerText;
  let userData = JSON.parse(localStorage.getItem(sessionUser));
  let userLists = userData.lists;
  // remove existing todos when returning to list
  while(todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  
  // loop through array and assign each item a class and append to a div
  for (let list of userLists) {
    if (list.name === listName) {
      let listTodos = list.items;

      listTodos.forEach(item => {
        let todoItem = document.createElement('li');
        let checkboxItem = document.createElement('div');
        let todoManagment = document.createElement('div');
        let checkbox = document.createElement('input');
        let itemText = document.createElement('span');
        let todoEditLink = document.createElement('a');
        let todoEditButton = document.createElement('span')
        let deleteButton = document.createElement('button');
        todoItem.classList.add('todo-item');
        checkboxItem.classList.add('checkbox-item');
        todoManagment.classList.add('todo-management');
        checkbox.classList.add('checkbox');
        itemText.classList.add('todo-text');
        todoEditLink.classList.add('todo-edit-link');
        todoEditButton.classList.add('material-icons', 'todo-edit-btn');
        deleteButton.classList.add('btn-remove', 'remove-todo');
        itemText.innerText = item.name;
        todoEditButton.innerText = 'mode_edit'
        deleteButton.innerText = 'X';
        checkbox.setAttribute('type', 'checkbox');
        checkboxItem.appendChild(checkbox);
        checkboxItem.appendChild(itemText);
        todoEditLink.appendChild(todoEditButton);
        todoManagment.appendChild(todoEditLink);
        todoManagment.appendChild(deleteButton);
        todoItem.appendChild(checkboxItem);
        todoItem.appendChild(todoManagment);
        todoList.appendChild(todoItem);

        if (item.checked === true) {
          checkbox.checked = true;
        }

      });
    }
  }

  todoDiv.appendChild(todoList);
}

function removeTodoFromLocalStorage(todo) {
  let listName = todoHeader.innerText;
  let userData = JSON.parse(localStorage.getItem(sessionUser));
  let userLists = userData.lists;

  for (let i of userLists) {
    if (i.name === listName) {
      let listArr = i.items;
      let todoIndex = listArr.indexOf(todo);
      listArr.splice(todoIndex, 1);
      localStorage.setItem(sessionUser, JSON.stringify(userData));
    }
  }
}

function removeTodo(todo) {
  todo.target.parentElement.parentElement.remove();
  removeTodoFromLocalStorage(todo.target.parentElement.parentElement.children[0].children[1].textContent);
}

function checkedStatus(item) {
  const userData = JSON.parse(localStorage.getItem(sessionUser));
  const userLists = userData.lists;
  const listName = todoHeader.innerText;
  const checkedItem = item.nextSibling.innerText;
  
  for (let list of userLists) {
    if (list.name === listName) {
      for (let todo of list.items) {
        if(todo.name === checkedItem) {
          if (todo.checked === false) {
            todo.checked = true;
            localStorage.setItem(sessionUser, JSON.stringify(userData));
            return;
          }
          if (todo.checked === true) {
            todo.checked = false;
            localStorage.setItem(sessionUser, JSON.stringify(userData));
            return;
          }
        }
      }
    }
  }
  
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
  // introHeaderBar.remove();
  loadDashboardHeader();
  
  accountSettings.innerText = 'Account Settings';
  signOut.innerText = 'Sign Out';
  dashboardNav.classList.add('dashboard-nav');
  accountSettings.classList.add('account-settings-btn', 'btn-teal');
  signOut.classList.add('signout-btn', 'btn-white');
  dashboardNav.appendChild(accountSettings);
  dashboardNav.appendChild(signOut);
  mainSection.appendChild(dashboardNav)
  loadNewListForm();
  
  let userData = JSON.parse(localStorage.getItem(sessionUser));
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
  dashboardNav.remove();

  // add outer ui elements
  todoNav.classList.add('todo-nav');
  todoBackButton.classList.add('todo-back-btn', 'btn-teal');
  todoBackButton.innerText = 'back to dashboard';

  todoDiv.classList.add('todo-list-div');

  // add list name
  todoHeaderDiv.classList.add('todo-header-div');
  todoHeader.classList.add('todo-header');
  todoHeader.innerText = list;
  
  // add todo form
  addTodoForm.classList.add('add-todo-form');
  addTodoBtn.classList.add('add-todo-btn', 'btn-sm', 'btn-white');
  addTodoBtn.innerText = '+';
  addTodoInput.classList.add('add-todo-input');
  addTodoBtn.setAttribute('type', 'submit');
  addTodoInput.setAttribute('type', 'text');
  addTodoInput.setAttribute('placeholder', 'List Item');

  // add ul container
  todoList.classList.add('todo-list');

  // append to ui
  todoNav.appendChild(todoBackButton);
  todoNav.appendChild(accountSettings);
  todoNav.appendChild(signOut)
  addTodoForm.appendChild(addTodoBtn);
  addTodoForm.appendChild(addTodoInput);
  todoHeaderDiv.appendChild(todoHeader);
  todoDiv.appendChild(todoHeaderDiv);
  todoDiv.appendChild(addTodoForm);
  mainSection.appendChild(todoNav);
  mainSection.appendChild(todoDiv);
  mainSection.appendChild(todoList);

  // add all existing list items to ui
  addTodosToListPage();
}

function loadAccountSettings() {
  //remove dashboard list div, todo list div, and related nav buttons
  dashboardList.remove();
  todoDiv.remove();
  accountSettings.remove();
  todoBackButton.remove();

  let userData = JSON.parse(localStorage.getItem(sessionUser));

  accountSettingsDiv.classList.add('account-settings-div');
  accountHeaderDiv.classList.add('account-settings-header-div');
  accountHeader.classList.add('account-settings-header');
  userInfo.classList.add('user-info-form');
  userFirstName.classList.add('user-first-name');
  userLastName.classList.add('user-last-name');
  userEmail.classList.add('user-emaial');
  userPassword.classList.add('user-password');
  userSubmit.classList.add('account-settings-submit', 'btn', 'btn-lg', 'btn-teal');

  userFirstName.setAttribute('type', 'text');
  userFirstName.setAttribute('placeholder', 'First Name');
  userFirstName.required = true;
  userLastName.setAttribute('type', 'text');
  userLastName.setAttribute('placeholder', 'Last Name');
  userLastName.required = true;
  userEmail.setAttribute('type', 'text');
  userEmail.setAttribute('placeholder', 'Email Address');
  userEmail.required = true;
  userPassword.setAttribute('type', 'password');
  userPassword.setAttribute('placeholder', 'Password');
  userPassword.required = true;
  userSubmit.setAttribute('type', 'submit');

  accountHeader.innerHTML = 'Account Settings'
  userFirstName.value = userData.firstName;
  userLastName.value = userData.lastName;
  userEmail.value = userData.email;
  userPassword.value = userData.password;
  userSubmit.value = 'Save & Return';

  userInfo.appendChild(userFirstName);
  userInfo.appendChild(userLastName);
  userInfo.appendChild(userEmail);
  userInfo.appendChild(userPassword);
  userInfo.appendChild(userSubmit);
  accountHeaderDiv.appendChild(accountHeader);
  accountSettingsDiv.appendChild(accountHeaderDiv);
  accountSettingsDiv.appendChild(userInfo);
  mainSection.appendChild(accountSettingsDiv);
}

function updateUserInfo(first, last, email, password) {
  let userData = JSON.parse(localStorage.getItem(sessionUser));
  localStorage.removeItem(sessionUser);
  sessionUser = userEmail.value;
  userData.firstName = first;
  userData.lastName = last;
  userData.email = email;
  userData.password = password;
  localStorage.setItem(sessionUser, JSON.stringify(userData));
}

function editListItem(list) {
  const listTitle = list.firstChild.firstChild.innerText;
  const listEditForm = document.createElement('form')
  const listEditInput = document.createElement('input');
  
  // list item
  list.classList.remove('list-item')
  list.classList.add('list-item-edit-view');
  // list management div
  list.children[1].classList.remove('list-management');
  list.children[1].classList.add('list-management-edit-view');
  // list edit link
  list.children[1].children[0].classList.remove('list-edit-link');
  list.children[1].children[0].classList.add('list-edit-link-edit-view');
  // list edit span
  list.children[1].children[0].children[0].classList.remove('list-edit-btn');
  list.children[1].children[0].children[0].classList.add('list-edit-btn-edit-view');
  // remove button
  list.children[1].children[1].classList.remove('remove-item');
  list.children[1].children[1].classList.add('remove-item-edit-view');

  listEditForm.classList.add('edit-list-form');
  listEditInput.classList.add('list-edit-input');
  listEditInput.setAttribute('type', 'text');
  listEditInput.required = true;
  listEditInput.value = listTitle;

  listEditForm.appendChild(listEditInput);
  list.replaceChild(listEditForm, list.firstChild);

  listEditForm.addEventListener('submit', (e) => {
    e.preventDefault();
    updateListName(listTitle, listEditInput.value.trim(), list);
  });
}

function updateListName(oldName, newName, parent) {
  const userData = JSON.parse(localStorage.getItem(sessionUser));
  const listLink = document.createElement('a');
  const listText = document.createElement('span');
  const listForm = parent.firstChild;
  
  for (let list of userData.lists) {
    if(list.name === oldName) {
      list.name = newName;
      localStorage.setItem(sessionUser, JSON.stringify(userData));
      
      // list item
      parent.classList.remove('list-item-edit-view');
      parent.classList.add('list-item');
      // list management div
      parent.children[1].classList.remove('list-management-edit-view');
      parent.children[1].classList.add('list-management');
      // list edit link
      parent.children[1].children[0].classList.remove('list-edit-link-edit-view');
      parent.children[1].children[0].classList.add('list-edit-link');
      // list edit span
      parent.children[1].children[0].children[0].classList.remove('list-edit-btn-edit-view');
      parent.children[1].children[0].children[0].classList.add('list-edit-btn');
      // remove button
      parent.children[1].children[1].classList.remove('remove-item-edit-view');
      parent.children[1].children[1].classList.add('remove-item');

      listLink.classList.add('list-link');
      listText.classList.add('item-text');
      listText.innerText = newName;

      listLink.appendChild(listText);
      parent.replaceChild(listLink, listForm);
    }
}
}

function editTodoItem(todo) {
  const todoName = todo.children[0].children[1].innerText;
  const listName = todoHeader.innerText;
  const todoEditForm = document.createElement('form');
  const todoEditInput = document.createElement('input');

  // todo item li
  todo.classList.remove('todo-item');
  todo.classList.add('todo-item-edit-view');
  // edit form
  todoEditForm.classList.add('todo-edit-form');
  // edit input
  todoEditInput.classList.add('todo-edit-input');
  todoEditInput.setAttribute('type', 'text');
  todoEditInput.required = true;

  todoEditInput.value = todoName;

  todoEditForm.appendChild(todoEditInput);

  todo.replaceChild(todoEditForm, todo.firstChild);

  todoEditForm.addEventListener('submit', (e) => {
    e.preventDefault();
    updateTodoName(todoName, todoEditInput.value.trim(), listName, todo);
  })
}

function updateTodoName(oldName, newName, list, parent) {
  const userData = JSON.parse(localStorage.getItem(sessionUser));
  const checkboxItem = document.createElement('div');
  const checkbox = document.createElement('input');
  const todoText = document.createElement('span');
  const todoForm = parent.firstChild;

  for(let l of userData.lists) {
    if (l.name === list) {
      for (let t of l.items) {
        if (t.name === oldName) {
          t.name = newName;
          localStorage.setItem(sessionUser, JSON.stringify(userData));

          parent.classList.remove('todo-item-edit-view');
          parent.classList.add('todo-item');
          checkboxItem.classList.add('checkbox-item');
          checkbox.classList.add('checkbox');
          checkbox.setAttribute('type', 'checkbox');
          todoText.classList.add('todo-text');
          todoText.innerText = newName;

          checkboxItem.appendChild(checkbox);
          checkboxItem.appendChild(todoText);

          parent.replaceChild(checkboxItem, todoForm);
        }
      }
    }
  }
}
// FUNCTIONS 

// set signup inputs to local storage
function newUserLocalStorage(firstName, lastName, emailAddress, pass, agreeToTerms) {
  let newUser = new User(firstName, lastName, emailAddress, pass, agreeToTerms);
  localStorage.setItem(emailAddress, JSON.stringify(newUser));
}

function signinValidator(emailAddres, pass) {
  let userData = JSON.parse(localStorage.getItem(emailAddres));
  let errorArr = [];
 
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
    return `
    ${introHeader()}
    ${signinForm()}
    <div class='error-div'>
      <ul>
      ${errorArr.map((error) => `<li>${error}</li>`).join('')}
      </ul>
    </div>`
  } else {
    return `
    ${introHeader()}
    ${signinForm()}
    <p>Success</p>`
  }
}

// validates signup form, displays error and loads confirmation
function signupValidator(fname, lname, email, password, terms) {
  let errorArr = [];
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
    return `
    ${introHeader()}
    ${signupForm()}
    <div class='error-div'>
      <ul>
      ${errorArr.map((error) => `<li>${error}</li>`).join('')}
      </ul>
    </div>`
  } else {
    newUserLocalStorage(fname, lname, email, password, terms);
    return `${introHeader()} ${signupConfirmation(fname, lname, email)}`
  }
}

// EVENT LISTENERS

mainSection.innerHTML = `${introHeader()} ${introButtons()}`

// load signin/signup page
mainSection.addEventListener('click', (e) => {
  if (e.target.id === 'login-btn') {
    mainSection.innerHTML = `${introHeader()} ${signinForm()}`
  }
  if (e.target.id === 'signup-btn') {
    mainSection.innerHTML = `${introHeader()} ${signupForm()}`
  }
});

// submitting the signin form
mainSection.addEventListener('submit', (e) => {
  e.preventDefault();
  if (e.target.id === 'signin-form') {
    let emailInput = e.target.children[0].value.toLowerCase().trim();
    let passwordInput = e.target.children[1].value.trim();
    mainSection.innerHTML = `${signinValidator(emailInput, passwordInput)}`;
  }
})

// submitting the signup form
mainSection.addEventListener('submit', (e) => {
  e.preventDefault();
  if (e.target.id === 'signup-form') {
    let inputFName = e.target.children[0].value.trim();
    let inputLName = e.target.children[1].value.trim();
    let inputEmail = e.target.children[2].value.toLowerCase().trim();
    let inputPassword = e.target.children[3].value.trim();
    let agreeToTerms = e.target.children[4].children[0].checked;
    mainSection.innerHTML = `${signupValidator(inputFName, inputLName, inputEmail, inputPassword, agreeToTerms)}`;
  }
})

// confSubmitButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   confirmationDiv.remove();
//   loadDashboard();
// });

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
    loadListPage(addListInput.value);
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
  if (e.target.classList.contains('list-edit-btn')) {
    editListItem(e.target.parentElement.parentElement.parentElement);
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
  addTodosToLocalStorage();
  addTodosToListPage();
  addTodoInput.value = '';
});

todoDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-todo')) {
    removeTodo(e);
  }
  if (e.target.classList.contains('todo-edit-btn')) {
    editTodoItem(e.target.parentElement.parentElement.parentElement);
  }
});

accountSettings.addEventListener('click', (e) => {
  e.preventDefault();
  loadAccountSettings();
});

userInfo.addEventListener('submit', (e) => {
  e.preventDefault();
  updateUserInfo(userFirstName.value, userLastName.value, userEmail.value, userPassword.value);
  accountSettingsDiv.remove();
  loadDashboard();
});

signOut.addEventListener('click', (e) => {
  dashboardHeaderBar.remove();
  dashboardNav.remove();
  todoNav.remove();
  dashboardList.remove();
  todoDiv.remove();
  accountSettingsDiv.remove();
  loadIntroHeader();
  loadIntroButtons();
});

todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('checkbox')) {
    checkedStatus(e.target);
  } else {
    return;
  }
});
