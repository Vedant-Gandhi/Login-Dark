const usernameNode = document.getElementById("username");
const passwordNode = document.getElementById("password");
const email = document.getElementById("email");

const form = document.forms[0];

const errorMessageNodeNames = {
  USERNAME: "username-error-message",
  PASSWORD: "password-error-message",
  EMAIL: "email-error-message",
};

const errorMessageNodes = {
  USERNAME: document.getElementById(errorMessageNodeNames.USERNAME),
  PASSWORD: document.getElementById(errorMessageNodeNames.PASSWORD),
  EMAIL: document.getElementById(errorMessageNodeNames.EMAIL),
};

function usernameValidation(value) {
  if (value && value.trim()) {
    if (value.length < 6) return "Username must be atleast 6 characters long.";
  } else {
    return "Username must not be empty.";
  }
}

function passwordValidation(value) {
  if (value && value.trim()) {
    if (value.length < 8) return "Password must be atleast 8 characters long.";
    else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        value
      )
    )
      return "Weak Password.";
  } else {
    return "Password must not be empty.";
  }
}

function emailValidation(value) {
  if (value && value.trim()) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
      return "Invalid Email ";
  } else {
    return "Email  must not be empty.";
  }
}

usernameNode.addEventListener("focusout", (e) => {
  let value = e.target.value || "";
  let errorMessage = usernameValidation(value);
  errorMessageNodes.USERNAME.innerHTML = errorMessage || "";
});

passwordNode.addEventListener("focusout", (e) => {
  let value = e.target.value || "";
  let errorMessage = passwordValidation(value);
  errorMessageNodes.PASSWORD.innerHTML = errorMessage || "";
});

email.addEventListener("focusout", (e) => {
  let value = e.target.value || "";
  let errorMessage = emailValidation(value);
  errorMessageNodes.EMAIL.innerHTML = errorMessage || "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let usernameErrorMessage = usernameValidation(usernameNode?.value || "");
  let passwordErrorMessage = passwordValidation(passwordNode?.value || "");
  let emailErrorMessage = emailValidation(email?.value || "");

  if (usernameErrorMessage)
    errorMessageNodes.USERNAME.innerHTML = usernameErrorMessage || "";
  else if (passwordErrorMessage)
    errorMessageNodes.PASSWORD.innerHTML = passwordErrorMessage || "";
  else if (emailErrorMessage)
    errorMessageNodes.EMAIL.innerHTML = emailErrorMessage || "";
  else {
    window.location.reload();
  }
});
