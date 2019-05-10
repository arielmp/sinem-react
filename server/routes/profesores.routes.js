const express = require('express');
const router = express.Router();

const profesorController = require('../controllers/profesor.controller');

router.get('/',profesorController.getProfesores);
router.get('/:id',profesorController.getProfesor);
router.post('/',profesorController.createProfesor);
router.put('/:id',profesorController.editProfesor);
router.delete('/:id',profesorController.deleteProfesor);

router.get('/:id/instrumentos',profesorController.getProfesorInstrumentos);

router.get('/inactivos/obtener',profesorController.getProfesoresInactivos);

module.exports = router;