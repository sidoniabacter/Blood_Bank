const DEMO_ACCOUNT = {
  email: "donor@bloodbank.test",
  password: "GiveLife2026",
};

const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const passwordToggle = document.querySelector("#password-toggle");
const loginButton = document.querySelector("#login-button");
const formMessage = document.querySelector("#form-message");
const demoToggle = document.querySelector("#demo-toggle");
const demoDetails = document.querySelector("#demo-details");

function updateLoginButton() {
  loginButton.disabled = !emailInput.value.trim() || !passwordInput.value;
}

function clearFieldError(input, error) {
  input.removeAttribute("aria-invalid");
  error.textContent = "";
  error.hidden = true;
}

function showFieldError(input, error, message) {
  input.setAttribute("aria-invalid", "true");
  error.textContent = message;
  error.hidden = false;
  input.focus();
}

function clearCredentialError() {
  formMessage.textContent = "";
  formMessage.hidden = true;
}

demoToggle.addEventListener("click", () => {
  const isExpanded = demoToggle.getAttribute("aria-expanded") === "true";
  demoToggle.setAttribute("aria-expanded", String(!isExpanded));
  demoToggle.textContent = isExpanded ? "Show demo account" : "Hide demo account";
  demoDetails.hidden = isExpanded;
});

passwordToggle.addEventListener("click", () => {
  const isVisible = passwordInput.type === "text";
  passwordInput.type = isVisible ? "password" : "text";
  passwordToggle.setAttribute("aria-pressed", String(!isVisible));
  passwordToggle.textContent = isVisible ? "Show password" : "Hide password";
});

loginForm.addEventListener("input", (event) => {
  if (event.target === emailInput) {
    clearFieldError(emailInput, emailError);
  } else if (event.target === passwordInput) {
    clearFieldError(passwordInput, passwordError);
  }
  clearCredentialError();
  updateLoginButton();
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearFieldError(emailInput, emailError);
  clearFieldError(passwordInput, passwordError);
  clearCredentialError();

  const email = emailInput.value.trim();

  if (!email) {
    showFieldError(emailInput, emailError, "Please enter your e-mail address.");
    return;
  }

  if (emailInput.validity.typeMismatch) {
    showFieldError(
      emailInput,
      emailError,
      "Enter a valid e-mail address, such as name@example.com.",
    );
    return;
  }

  if (!passwordInput.value) {
    showFieldError(passwordInput, passwordError, "Please enter your password.");
    return;
  }

  if (
    email.toLowerCase() === DEMO_ACCOUNT.email &&
    passwordInput.value === DEMO_ACCOUNT.password
  ) {
    window.location.href = "index.html";
    return;
  }

  formMessage.textContent = "The e-mail address or password is incorrect.";
  formMessage.hidden = false;
  passwordInput.focus();
});
