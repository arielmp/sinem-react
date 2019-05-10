const Profesor = require('../models/profesor');
//const {ObjectId} = require('mongoose').Types;

const ProfesorController = {};

ProfesorController.getProfesores = async (req, res) => {
    const profesores = await Profesor.find({estado: 'Activo'}).sort('nombre');

    res.json(profesores);
};

ProfesorController.getProfesoresInactivos = async (req, res) => {
    const profesores = await Profesor.find({estado: { $ne: 'Activo'}}).sort('nombre');

    res.json(profesores);
};



ProfesorController.getProfesor = async (req, res) => {
    try {
        const profesor = await Profesor.findById(req.params.id).populate('instrumentos');
        console.log(profesor);
        res.json(profesor);
    } catch (error) {
        res.json({
            status: 'error'
        })
    }
};

ProfesorController.getProfesorInstrumentos = async (req, res) => {
    try {
        const profesor = await Profesor.findById(req.params.id,{instrumentos:1,_id:0}).populate('instrumentos');
        res.json(profesor.instrumentos);
    } catch (error) {
        res.json({
            status: 'error'
        })
    }
};

ProfesorController.createProfesor = async (req, res) => {
   // req.body.instrumentos_id = crearInstrumentosIds(req.body.instrumentos_id);
    const nuevoProfesor = new Profesor(req.body);       
    obj = await nuevoProfesor.save();
    res.json(obj);
};

ProfesorController.editProfesor = async (req, res) => {
    //req.body.instrumentos_id = crearInstrumentosIds(req.body.instrumentos_id);
    await Profesor.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Profesor Actualizado'
    });
};

ProfesorController.deleteProfesor = async (req, res) => {
    await Profesor.findByIdAndRemove(req.params.id);
    //await Profesor.findByIdAndUpdate(req.params.id,{$set: {estado: 'Inactivo'}});    

    res.json({
        status: 'Profesor Eliminado'
    });
};

module.exports = ProfesorController;

/*
function crearInstrumentosIds(arreglo){    
    arregloObj = [];
    arreglo.forEach(ins => {
        objId = ObjectId(ins);           
        console.log(ins);
        arregloObj.push(objId);
      });    
    return arregloObj;
}*/