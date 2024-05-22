const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // autenticación verificar el usuario y la contraseña
  if (username === 'user' && password === 'password') {
    // Si la autenticación es exitosa
    res.cookie('loggedIn', 'true', { httpOnly: true });
    res.redirect('/perfil');
  } else {
    // Si la autenticación falla
    res.status(401).send('Usuario o contraseña incorrectos');
  }
});

module.exports = router;
