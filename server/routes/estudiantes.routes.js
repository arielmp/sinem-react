const express = require('express');
const router = express.Router();

const estudianteController = require('../controllers/estudiante.controller');

router.get('/',estudianteController.getEstudiantes);
router.get('/:id',estudianteController.getEstudiante);
router.post('/',estudianteController.createEstudiante);
router.put('/:id',estudianteController.editEstudiante);
router.delete('/:id',estudianteController.deleteEstudiante);

router.get('/:id/encargados',estudianteController.getEncargados);

router.get('/inactivos/obtener',estudianteController.getEstudiantesInactivos);
router.get('/todos/obtener',estudianteController.getTodosEstudiantes);

module.exports = router;