/*
📚 BACKGROUND:
We are using LocalStorage to simulate a login session.
If a user logs in successfully, we store their data using the key 'currentUser'.

Example:
localStorage.setItem("currentUser", JSON.stringify(userObject));

We want to make sure:
✅ Only users who are logged in can access home.html
❌ If a user is not logged in, redirect them to login.html
*/

// =======================
// ✅ OBJECTIVE:
// 1. Link this script file to home.html
//    <script src="./scripts/script.js" defer></script>
//
// 2. Write a function `checkLoginMiddleware()`
//    - If user is not logged in (no 'currentUser' in localStorage)
//      => Redirect to login.html
//    - If user is logged in => allow access
//
// 3. Run the function when the page is loaded
// =======================

function checkLoginMiddleware() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  //START HERE, DO VALIDATION, ENSURE USER LOGED-IN
}

// RUN THE MIDDLEWARE WHEN PAGE IS LOADED
window.addEventListener("DOMContentLoaded", () => {
  checkLoginMiddleware();
});

/*
💡 NOTE:
This is a simplified technique using plain JavaScript.
In real-world web applications, access control is usually handled with server-side middleware.

But this version is perfect for practice in front-end development and understanding login session flow.
*/
