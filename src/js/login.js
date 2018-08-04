const loginButton = document.getElementById("login-button");
let loginDiv = document.getElementById("login-wrapper");
const userEmail = document.getElementById("userCapture");
const userPassword = document.getElementById("passwordCapture");


loginButton.addEventListener("click", (event) => {

    if (userEmail.value === "lucile" && userPassword.value === "admin") {
    document.location = "views/page2.html";
  }
  else {
    alert("Usuario no registrado. Por favor revisa que hayas ingresado correctamente tu email y tu contraseña.");
  }
});