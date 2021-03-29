# Project #1


### Details:
 
Create a simple "to-do list" application, using client-side HTML, CSS, and Javascript only. This application should store its data using localStorage only, and should not connect to any external APIs, backends, databases etc. This should function as a "Single Page Application", so the page should never actually refresh or reload, and no links should direct to any other page. Instead, when links are clicked (or forms are submitted), the contents of the page should disappear and the new content should be loaded in its place, all without actually redirecting the user. Here are the user-stories:


#### Index

1. Upon a fresh load (or refresh) of the application, the user should see the title of the application, a description, and two buttons: "Sign Up" and "Log In".
2. If "Sign Up" is clicked, the user should be taken to a form where they need to enter their: first name, last name, email, and password (all strings, but passwords should not be displayed in plain text inputs, use password inputs instead). The user also needs to check a check-box that says "I agree to the Terms of Use".  When they submit the form, if there are any errors on the form, they should see a red error message somewhere on the screen. If the form submission is successful, they should be taken to their dashboard. All data for the new user should be stored in localStorage. Note: in an actual application you would never store passwords this way, this is just for the sake of this project.
3. If "Log In" is clicked the user should be taken to a form where they need to enter their email address and password. When they submit the form, if there are any errors on the form (or if the email and password don't match an existing user), they should see a red error message somewhere on the screen. If the inputs are fine, and both of these match an existing user, then the user should be taken to their dashboard.

#### Dashboard:

1. The dashboard should list (in chronological order), all of the "To-Do Lists" created by the user thus far. If none have been created, none should be displayed. In either case, there should be a "Create New to-do List button" somewhere on the screen.
2. If one of the existing todo-lists is clicked on, the user should be taken to that list.
3. If a user clicks to create a new todo list, they should be taken to a blank list.

#### Lists:

When a user is viewing a (new or existing) list, they should be able to :

1. Name or rename the list to anything they want, as long as it doesn't conflict with the name of any other list created by that particular user.
2.  Add as many items to the list as they wish
3. Check off an item as "done", and uncheck it as well
4. Save the list

#### Users 

1. If the user is logged in, then at the top of the screen, on every page of the site, there should be a "log out" button. Clicking that should log the user out.
2. If the user is logged in, then at the top of the screen, on every page of the site, there should be a button that says "account settings". Clicking that link should take the user to a page where they can edit any/all of the information they entered on the signup form.
3. Your application should support as many unique users as possible. The actions that one user takes within the application should have virtually no effect on what other users are doing.

### Extra Credit:

If you feel like getting fancy, try to find an open-source JS library for hashing passwords (using any hashing function you prefer). Hash the passwords when you receive them and only store the hash rather than the raw password.

As mentioned above, storing actual users' passwords (in a real life application) is far more complex than this, and often involves many moving parts, but it's still good practice to get used to using hashing libraries.
