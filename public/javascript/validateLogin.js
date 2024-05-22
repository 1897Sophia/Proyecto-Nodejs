document.addEventListener('DOMContentLoaded', () => {
    const perfilLink = document.getElementById('perfil-link');
    const prestamoLink = document.getElementById('prestamo-link');
  
    const isLoggedIn = false; // Aquí deberías obtener el estado real del inicio de sesión
  
    function checkLogin(event) {
      if (!isLoggedIn) {
        event.preventDefault();
        alert('Debe iniciar sesión para acceder a esta página.');
      }
    }
  
    perfilLink.addEventListener('click', checkLogin);
    prestamoLink.addEventListener('click', checkLogin);
  });
  