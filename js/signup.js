import {
  emailRegex,
  nameRegex,
  passwordRegex,
  validate,
} from "./utiles/validation.js";

//!=========> HTML ELEMENTS
const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const registerBtn = document.getElementById("registerBtn");
const welcomeSuccess = document.querySelector(".welcome-success");

//!========> JS VARIABLES
const users = JSON.parse(localStorage.getItem("users")) || [];
//!===========> FUNCTIONS
function signup() {
  if (
    validate(firstNameInput, nameRegex) &&
    validate(lastNameInput, nameRegex) &&
    validate(emailInput, emailRegex) &&
    validate(passwordInput, passwordRegex)
  ) {
    let isExist = users.find((user) => {
      return user.email === emailInput.value;
    });
    if (isExist) {
      return alert("email already exist");
    }
    let user = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    console.log(users);
    welcomeSuccess.classList.replace('d-none','d-flex')
  } else {
    alert(" wrong inputs ");
  }
}

//!=========> EVENTS
registerBtn.addEventListener("click", signup);
firstNameInput.addEventListener("input", () => {
  validate(firstNameInput, nameRegex);
});
lastNameInput.addEventListener("input", () => {
  validate(lastNameInput, nameRegex);
});
emailInput.addEventListener("input", () => {
  validate(emailInput, emailRegex);
});
passwordInput.addEventListener("input", () => {
  validate(passwordInput, passwordRegex);
});
