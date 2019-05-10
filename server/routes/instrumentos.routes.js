const express = require('express');
const router = express.Router();

const InstrumentoController = require('../controllers/instrumento.controller');

router.get('/',InstrumentoController.getInstrumentos);
router.get('/:id',InstrumentoController.getInstrumento);
router.post('/',InstrumentoController.createInstrumento);
router.put('/:id',InstrumentoController.editInstrumento);
router.delete('/:id',InstrumentoController.deleteInstrumento);

router.get('/existe/:nombre',InstrumentoController.existe);

module.exports = router;