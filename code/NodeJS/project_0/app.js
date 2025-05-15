const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const app = express();

const hostname = '0.0.0.0';
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/axios', express.static(path.join(__dirname, 'node_modules/axios/dist')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Página principal
app.get('/', (req, res) => {
  res.render('index');
});

// Ruta simulada tipo API
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola desde el servidor!' });
});

app.use(logger('dev'));

app.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}`);
});

