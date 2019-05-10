const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const { mongoose } = require('./database')
const routes = require('express').Router();
const MiddleJwt = require('./_helpers/jwt.middleware'); //Middleware para revisar que exista un usuario entrando a las rutas API

const app = express();

//Setings
app.set('port', process.env.PORT || 3000);
app.set('superSecret', 'hgjdksowjeEEfg33fkhjbmd45Ba.asp0948jfd');

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//ruta para build de angular
app.use(express.static(__dirname + '/public'))
//para uso del server angular en developer
app.use(cors({ origin: 'http://localhost:4200' }));

//Routes de api
app.use('/api/usuarios', require('./routes/usuarios.routes')); // para el login

app.use('/api/estudiantes',MiddleJwt.revisarToken,require('./routes/estudiantes.routes'));
app.use('/api/encargados',MiddleJwt.revisarToken, require('./routes/encargados.routes'));
app.use('/api/profesores',MiddleJwt.revisarToken, require('./routes/profesores.routes'));
app.use('/api/instrumentos',MiddleJwt.revisarToken, require('./routes/instrumentos.routes'));
app.use('/api/cursos', require('./routes/cursos.routes'));
app.use('/api/notas',MiddleJwt.revisarToken, require('./routes/notas.routes'));
app.use('/api/reportes', require('./routes/reportes.routes'));

//si no esta entre las rutas pasadas, lo manda a index(angular) para que lo maneje 
app.use(routes.get('*', function (req, res) { res.sendFile(path.join(__dirname + '/public/index.html')) }));

//Inicio
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});