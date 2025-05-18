### task 1

- Do some fullscreen web, that show image and call to action
- Must have image
- Must have heading h1, some description p
- Then must have link to LOGIN & REGISTER button

### Task 2

- IN register.html
- Create an page that show register page
- Must have and field (username, email, password, confirm password)
- must have checkbox remeber me
- then must have button register and login
- Do teh same on login.html

### Task 3

- In login.html
- Create an page that show login page
- Input only 2 (username, password)
- must have checkbox remeber me
- Add login button

### Task 4

- Create middleware for the home.html page
- Ensure that only logged-in users can access the home.html page
- If they are not logged in or do not have an account, redirect them to the login/register page
- Read scripts/script.js for more detail

### Task 5

1. Add method to the form
   GET : for getting data
   POST : for sending data like prosessign form (send data user)

2. Show the erro inside the form (login / register form) : do by DOM manipulation
3. After login proses done, add data user to the session storage (GOOGLE it).

so thenicly, when user register we store data to localstorage (Its like database, permanent storage, NOT DELETED EVEN WHEN BROWSER TAB CLONE)
But, when user login, we add data user to the Session storage (Temporary storgae, deleted when user close browser).

so by doing that, we can perfom logout proses: logout prses is delete user session (not deleted user)
