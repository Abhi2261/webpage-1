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

function registerUser() {
  const isRegisterPage = window.location.pathname.includes("register.html");
  if (!isRegisterPage) return;

  const registerForm = document.getElementById("registrationForm");

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userName = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;
    const confirmPass = document.getElementById("confirm-password").value;

    if (password !== confirmPass) {
      alert("Passwords do not match!");
      return;
    }

    const user = {
      userName,
      password,
    };

    localStorage.setItem("registeredUser", JSON.stringify(user));
    alert("Registration successful!");

    // Optional: redirect to login page
    window.location.href = "login.html";
  });
}



function loginauth() {
  const isLoginpage = window.location.pathname.includes("login.html");
  if (!isLoginpage) return;

  const loginForm = document.getElementById("loginForm");

  if (!loginForm) {
    console.warn("loginForm not found.");
    return;
  }

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const loginUserName = document.getElementById("username").value;
    const loginPassword = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      storedUser &&
      storedUser.userName === loginUserName &&
      storedUser.password === loginPassword
    ) {
      localStorage.setItem("currentUser", JSON.stringify(storedUser));
      alert("Login successful!");
      window.location.href = "home.html";
    } else {
      alert("Invalid username or password.");
    }
  });
}




function checkLoginMiddleware() {
  const user = JSON.parse(localStorage.getItem("registeredUser"));
  const isHomepage = window.location.pathname.includes("home.html");
 
  if (!user && isHomepage) {
    window.location.href = "login.html";
  }

  // START HERE, DO VALIDATION, ENSURE USER LOGED-IN
  // Ensure this only active in home.html
  // because for now, we only protect the home.html
}

// RUN THE MIDDLEWARE WHEN PAGE IS LOADED
window.addEventListener("DOMContentLoaded", () => {
  checkLoginMiddleware();
  registerUser();
  loginauth();
});











/*
💡 NOTE:
This is a simplified technique using plain JavaScript.
In real-world web applications, access control is usually handled with server-side middleware.

But this version is perfect for practice in front-end development and understanding login session flow.
*/
