"use strict";

var express = require('express');

var router = express.Router();
router.post('/login', function (req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password; // autenticación verificar el usuario y la contraseña

  if (username === 'user' && password === 'password') {
    // Si la autenticación es exitosa
    res.cookie('loggedIn', 'true', {
      httpOnly: true
    });
    res.redirect('/perfil');
  } else {
    // Si la autenticación falla
    res.status(401).send('Usuario o contraseña incorrectos');
  }
});
module.exports = router;
//# sourceMappingURL=users.dev.js.map
