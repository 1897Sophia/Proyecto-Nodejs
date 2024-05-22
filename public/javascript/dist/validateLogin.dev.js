"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var perfilLink = document.getElementById('perfil-link');
  var prestamoLink = document.getElementById('prestamo-link');
  var isLoggedIn = false; // Aquí se obtiene el estado real del inicio de sesión

  function checkLogin(event) {
    if (!isLoggedIn) {
      event.preventDefault();
      alert('Debe iniciar sesión para acceder a esta página.');
    }
  }

  perfilLink.addEventListener('click', checkLogin);
  prestamoLink.addEventListener('click', checkLogin);
});
//# sourceMappingURL=validateLogin.dev.js.map