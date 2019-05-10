const Curso = require('../models/curso');
const Nota = require('../models/nota');
const NotaController = require('./nota.controller');
const CursoController = {};

//obtener cursos activos
CursoController.getCursos = async (req, res) => {
    const cursos = await Curso.find({estado: 'Activo'}).sort('nombre').populate('profesor');
    res.json(cursos);
};

//obtener cursos inactivos
CursoController.getCursosInactivos = async (req, res) => {
    const cursos = await Curso.find({estado: {$ne: 'Activo'}}).sort('nombre').populate('profesor');
    res.json(cursos);
};

CursoController.getCurso = async (req, res) => {
    try {
        const curso = await Curso.findById(req.params.id).populate('profesor').populate({ path: 'estudiantes', select: 'nombre' });
        res.json(curso);
    } catch (error) {
        res.json({
            status: 'error'
        })
    }
};

CursoController.getCursoEstudiantes = async (req, res) => {
    try {
        const curso = await Curso.findById(req.params.id, { estudiantes: 1, _id: 0 }).populate({ path: 'estudiantes', select: 'nombre instrumento_principal', populate: { path: 'instrumento_principal', select: 'nombre' } });
        res.json(curso.estudiantes);
    } catch (error) {
        res.json({
            status: 'error'
        })
    }
}

//falta: al crear el curso se deben de guardar el id del curso en los estudiantes que lo matricularon
CursoController.createCurso = async (req, res) => {
    const nuevoCurso = new Curso(req.body);
    obj = await nuevoCurso.save();

    //obj es el nuevo curso con su id
    obj.estudiantes.forEach(est => {
        NotaController.CrearNotasCurso(est,obj);
        //CrearNotas(est, obj);
    });


    res.json(obj);
};


CursoController.editCurso = async (req, res) => {
    estudiantes = req.body.estudiantes;
    cursoId = req.params.id;

    NotaController.ActualizarListaNotas(estudiantes,cursoId);
    //ActualizarListaNotas(estudiantes, cursoId);

    estudiantes.forEach(est => {
        NotaController.ExisteNota(est,cursoId);
        //ExisteNota(est, cursoId);
    });

    await Curso.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Curso Actualizado'
    });
};

CursoController.deleteCurso = async (req, res) => {

    NotaController.eliminarNotasCurso(req.params.id);
    //eliminarNotasCurso(req.params.id);
    await Curso.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Curso Eliminado'
    });
};

CursoController.getCursosProfesor = async (req,res) =>{
    profesorId = req.params.id;
    const cursos = await Curso.find({profesor: profesorId, estado: 'Activo'}).populate('profesor');
    res.json(cursos);
}

//MANEJO DE NOTAS de Curso
CursoController.getCursoNotas = async (req, res) => {
    cursoId = req.params.id;
    const notas = await Nota.find({ curso: cursoId }).populate({ path: 'estudiante', select: 'nombre' });
    res.json(notas);
};

module.exports = CursoController;