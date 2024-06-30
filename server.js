const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Define o diretório de build/web como público
app.use(express.static(path.join(__dirname)));

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
