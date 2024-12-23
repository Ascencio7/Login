document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos los elementos principales
    const loginForm = document.querySelector(".form-box.login");
    const registerForm = document.querySelector(".form-box.register");
    const loginInfo = document.querySelector(".info-text.login");
    const registerLink = document.querySelector(".register-link");
    const loginLink = document.querySelector(".login-link a");

    // Mostrar el formulario de registro
    registerLink.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.style.display = "none";
        loginInfo.style.display = "none";
        registerForm.style.display = "flex";
    });

    // Mostrar el formulario de inicio de sesión
    loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        registerForm.style.display = "none";
        loginForm.style.display = "flex";
        loginInfo.style.display = "flex";
    });
});