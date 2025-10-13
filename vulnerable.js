// Ejemplo vulnerable para probar CodeQL
const express = require('express');
const app = express();

// Vulnerabilidad: SQL INJECTION
app.get('/user', (req, res) => {
  const userId = req.query.id;
  const sql = "SELECT * FROM users WHERE id = " + userId;
  res.send("Consulta ejecutada: " + sql);
});

// Vulnerabilidad: XSS
app.get('/xss', (req, res) => {
  const name = req.query.name;
  res.send(`<h1>${name}</h1>`);
});

// Vulnerabilidad: Hardcoded secret
const password = "SuperSecret123";
