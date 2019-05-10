const express = require('express');
const router = express.Router();

const encargadoController = require('../controllers/encargado.controller');

router.get('/',encargadoController.getEncargados);
router.get('/:id',encargadoController.getEncargado);
router.post('/',encargadoController.createEncargado);
router.put('/:id',encargadoController.editEncargado);
router.delete('/:id',encargadoController.deleteEncargado);

router.get('/:id/estudiantes',encargadoController.getEstudiantes);

module.exports = router;