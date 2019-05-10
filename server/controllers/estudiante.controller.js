const Estudiante = require('../models/estudiante');

const EstudianteController = {};

EstudianteController.getEstudiantes = async (req, res) => {
    const estudiantes = await Estudiante.find({estado_estudiante: 'Activo'}).populate({ path: 'instrumento_principal' }).sort('nombre');
    res.json(estudiantes);
};

EstudianteController.getEstudiantesInactivos = async (req, res) => {
    const estudiantes = await Estudiante.find({estado_estudiante: 'Inactivo'}).populate({ path: 'instrumento_principal' }).sort('nombre');
    res.json(estudiantes);
};

EstudianteController.getTodosEstudiantes = async (req,res) => {
    const estudiantes = await Estudiante.find().populate({ path: 'instrumento_principal' }).sort('nombre');
    res.json(estudiantes);
}

EstudianteController.getEstudiante = async (req, res) => {
    try {
        const estudiante = await Estudiante.findById(req.params.id).populate('instrumento_principal').populate('profesor_tutor');
        res.json(estudiante);
    } catch (error) {
        res.json({
            status: 'error'
        })
    }
};

EstudianteController.createEstudiante = async (req, res) => {
    const nuevoEstudiante = new Estudiante(req.body);
    obj = await nuevoEstudiante.save();
    res.json(obj);
};

EstudianteController.editEstudiante = async (req, res) => {
    await Estudiante.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Estudiante Actualizado'
    });
};

EstudianteController.deleteEstudiante = async (req, res) => {
    await Estudiante.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Estudiante Eliminado'
    });
};

EstudianteController.getEncargados = async (req, res) => {
    estudiante = await Estudiante.findById(req.params.id, { encargados: 1, _id: 0 }).populate('encargados');
    res.json(estudiante.encargados);

}

module.exports = EstudianteController;