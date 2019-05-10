const express = require('express');
const router = express.Router();

const cursoController = require('../controllers/curso.controller');

router.get('/',cursoController.getCursos);

router.get('/:id',cursoController.getCurso);
router.post('/',cursoController.createCurso);
router.put('/:id',cursoController.editCurso);
router.delete('/:id',cursoController.deleteCurso);

router.get('/:id/estudiantes',cursoController.getCursoEstudiantes);
router.get('/:id/notas', cursoController.getCursoNotas);
router.get('/profesor/:id', cursoController.getCursosProfesor);

router.get('/inactivos/ver',cursoController.getCursosInactivos);



module.exports = router;