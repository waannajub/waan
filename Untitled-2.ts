const correctUsername = "student01";
const correctPassword = "1234";

const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");
const message = document.getElementById("message");

loginButton.addEventListener("click", function () {

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (usernameInput === correctUsername && passwordInput === correctPassword) {

        message.textContent = "Your username and password are correct! You are logged in.";

        loginButton.removeEventListener("click", this);
    } else {

        message.textContent = "Your username or password is incorrect! Please try again.";
    }
});