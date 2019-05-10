const Nota = require('../models/nota');
const Curso = require('../models/curso');

const ReporteController = {};

ReporteController.getEstudianteNotas = async (req, res) => {
    let estudianteId = req.params.id;
    const notas = await Nota.find({ estudiante: estudianteId }).populate('estudiante').populate({ path: 'curso', populate: { path: 'profesor' } });
    res.json(notas);
};

ReporteController.getCursoNotas = async (req, res) => {
    let cursoId = req.params.id;
    const notas = await Nota.find({ curso: cursoId }).populate('estudiante');
    res.json(notas);
}

ReporteController.getProfesorNotas = async (req, res) => {
    let profesorId = req.params.id;
    let cursos = await Curso.find({profesor: profesorId},{_id:1});
    let cursos_id = [];
    cursos.forEach(cur => {
        cursos_id.push(cur._id);
    }); 
    const notas = await Nota.find({ curso: { $in : cursos_id } } ).populate({ path: 'estudiante', populate: { path: 'instrumento_principal' } }).populate('curso');    
    res.json(notas);
}

module.exports = ReporteController;