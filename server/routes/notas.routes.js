const express = require('express');
const router = express.Router();

const notaController = require('../controllers/nota.controller');

router.get('/',notaController.getNotas);
router.get('/:id',notaController.getNota);
router.post('/',notaController.createNota);
router.put('/:id',notaController.editNota);
router.delete('/:id',notaController.deleteNota);

router.get('/curso/:id', notaController.getNotasCurso);

router.get('/curso/:cid/estudiante/:eid', notaController.getNotaEstudianteCurso);


module.exports = router;