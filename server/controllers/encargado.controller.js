const Encargado = require('../models/encargado');
const Estudiante = require('../models/estudiante');

const EncargadoController = {};

// CRUD
EncargadoController.getEncargados = async (req, res) => {
    const encargados = await Encargado.find().sort('nombre');
    res.json(encargados);
};

EncargadoController.getEncargado = async (req, res) => {
    try {
        const encargado = await Encargado.findById(req.params.id);
        res.json(encargado);
    } catch (error) {
        res.json({
            status: 'error'
        })
    }
};

EncargadoController.createEncargado = async (req, res) => {
    const nuevoEncargado = new Encargado(req.body);
    obj = await nuevoEncargado.save();
    res.json(obj);
};

EncargadoController.editEncargado = async (req, res) => {
    await Encargado.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Encargado Actualizado'
    });
};

EncargadoController.deleteEncargado = async (req, res) => {
    await Encargado.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Encargado Eliminado'
    });
};

//TABLAS REFERIDAS
EncargadoController.getEstudiantes = async (req, res) => {
    encargado_id = req.params.id;    
    estudiantes = await Estudiante.find({encargados: encargado_id});
    res.json(estudiantes);
}

module.exports = EncargadoController;