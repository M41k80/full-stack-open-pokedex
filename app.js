const express = require('express');
const path = require('path');
const app = express();

// Obtén el puerto de la variable de entorno o usa el puerto 5000 por defecto
const PORT = process.env.PORT || 5000;

// Sirve los archivos estáticos de la carpeta "dist"
app.use(express.static(path.join(__dirname, 'dist')));

// Maneja todas las rutas y redirige al archivo "index.html"
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});