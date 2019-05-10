const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UsuarioController = {};

UsuarioController.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find({},{password:false}).sort('nombre');
    res.json(usuarios);
};

UsuarioController.getUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id,{password:false}).populate('profesor');
        res.json(usuario);
    } catch (error) {
        res.json({
            status: 'error'
        })
    }
};

UsuarioController.createUsuario = async (req, res) => {
    const nuevoUsuario = new Usuario(req.body);
    const hash = bcrypt.hashSync(nuevoUsuario.password,bcrypt.genSaltSync(8));
    nuevoUsuario.password = hash;
    await nuevoUsuario.save();
    res.json({
        'status': 'Usuario Guardado'
    });
};

UsuarioController.editUsuario = async (req, res) => {
    const hash = bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(8));
    req.body.password = hash;

    await Usuario.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Usuario Actualizado'
    });
};

UsuarioController.deleteUsuario = async (req, res) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Usuario Eliminado'
    });
};

UsuarioController.IdentificarUsuario = async (req,res) => {    
    const email = req.body.email;
    const pass = req.body.password;    

    
    const usuario = await Usuario.findOne({email: email}).populate('profesor');
    
    if (usuario){      
        if(bcrypt.compareSync(pass,usuario.password)){            
            usuario.password = '';       
            const token =  jwt.sign({ usuario }, req.app.get('superSecret'));        
            res.json({
                status: 'exito',
                usuario: usuario,
                token: token
            });
        }else{
            res.json({
                status: 'error contraseña'
            })
        }
    }else{
        res.json({
            status: 'error email'
        })
    }

}

module.exports = UsuarioController;

