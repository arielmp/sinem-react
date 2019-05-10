const express = require('express');
const router = express.Router();

const reporteController = require('../controllers/reporte.controller');

router.get('/estudiante/:id',reporteController.getEstudianteNotas);
router.get('/curso/:id',reporteController.getCursoNotas);
router.get('/profesor/:id',reporteController.getProfesorNotas);


module.exports = router;