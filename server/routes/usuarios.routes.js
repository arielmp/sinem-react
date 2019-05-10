const express = require('express');
const router = express.Router();

const middleJwt = require('../_helpers/jwt.middleware');
const usuarioController = require('../controllers/usuario.controller');

router.post('/login',usuarioController.IdentificarUsuario);

router.use(middleJwt.revisarToken);
router.get('/',middleJwt.revisarToken,usuarioController.getUsuarios);
router.get('/:id',middleJwt.revisarToken,usuarioController.getUsuario);
router.post('/',middleJwt.revisarToken,usuarioController.createUsuario);
router.put('/:id',middleJwt.revisarToken,usuarioController.editUsuario);
router.delete('/:id',middleJwt.revisarToken,usuarioController.deleteUsuario);





module.exports = router;