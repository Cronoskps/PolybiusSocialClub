const form = document.getElementsByTagName("form")[0];
const username = document.getElementById("username");
const usernameError = document.getElementById("username-error");

const usernameRegExp = /^[a-zA-Z0-9_-]{3,15}$/;

// VALIDAMOS USERNAME

function validateUsername() {
  const isValid = usernameRegExp.test(username.value);

  if (isValid) {
    username.classList.remove("invalid");
    usernameError.innerHTML = "";
    usernameError.classList.remove("error", "active");
  } else {
    username.classList.add("invalid");
    usernameError.innerHTML = "Ingrese un nombre de usuario válido (3-15 caracteres alfanuméricos, guiones bajos o guiones)";
    usernameError.classList.add("error", "active");
  }

  return isValid;
}

window.addEventListener("load", function () {
  validateUsername();
});

username.addEventListener("input", validateUsername);

form.addEventListener("submit", function (event) {
  if (!validateUsername()) {
    event.preventDefault();
  }
});

// VALIDAMOS EL CAMPO DE CORREO

const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmail() {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);

    if (isValid) {
        email.classList.remove("invalid");
        emailError.innerHTML = "";
        emailError.classList.remove("error", "active");
    } else {
        email.classList.add("invalid");
        emailError.innerHTML = "Ingrese una dirección de correo electrónico válida (xxx@xxx.com)";
        emailError.classList.add("error", "active");
    }

    return isValid;
}

window.addEventListener("load", function () {
    validateEmail();
});

email.addEventListener("input", validateEmail);

form.addEventListener("submit", function (event) {
    if (!validateEmail()) {
        event.preventDefault();
    }
});
