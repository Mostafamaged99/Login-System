import { emailRegex, passwordRegex, validate } from "./utiles/validation.js";

//!=========> HTML ELEMENTS
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const signinBtn = document.getElementById("signinBtn");
const tryAgain = document.querySelector(".try-again");
const loginBtn = document.querySelector(".loginBtn");

//!========> JS VARIABLES
const users = JSON.parse(localStorage.getItem("users")) || [];
//!===========> FUNCTIONS
function signin() {
  if (
    validate(emailInput, emailRegex) &&
    validate(passwordInput, passwordRegex)
  ) {
    let user = users.find((user) => {
      return (
        user.email === emailInput.value && user.password === passwordInput.value
      );
    });
    if (user) {
        localStorage.setItem('loggedUser',true)
      return (window.location.href = "/index.html");
    } else {
      tryAgain.classList.replace("d-none", "d-flex");
    }
  } else {
    alert(" wrong inputs ");
  }
}

//!=========> EVENTS
signinBtn.addEventListener("click", signin);

loginBtn.addEventListener("click", () => {
  tryAgain.classList.replace("d-flex", "d-none");
  emailInput.value = "";
  passwordInput.value = "";
});

emailInput.addEventListener("input", () => {
  validate(emailInput, emailRegex);
});

passwordInput.addEventListener("input", () => {
  validate(passwordInput, passwordRegex);
});
