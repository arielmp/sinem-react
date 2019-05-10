const Nota = require('../models/nota');

const NotaController = {};

NotaController.getNotas = async (req, res) => {    

    //const notas = await Nota.find().populate('estudiante').populate('curso');
    const notas = await Nota.find().populate('estudiante').populate({path: 'curso', populate: { path: 'profesor'}});
    res.json(notas);
};

NotaController.getNota = async (req, res) => {
    try {
        const nota = await Nota.findById(req.params.id);
        res.json(nota);
    } catch (error) {
        res.json({
            status: 'error'
        })
    }
};

NotaController.createNota = async (req, res) => {
    const nuevoNota = new Nota(req.body);
    await nuevoNota.save();
    res.json({
        'status': 'Nota Guardada'
    });
};

NotaController.editNota = async (req, res) => {
    await Nota.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Nota Actualizada'
    });
};

NotaController.deleteNota = async (req, res) => {
    await Nota.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Nota Eliminada'
    });
};

NotaController.getNotasCurso = async (req, res) => {
    let id = req.params.id;
    const notas = await Nota.find({ curso: id }).populate({ path: 'estudiante', select: 'nombre' })
    res.json(notas);
}

NotaController.getNotaEstudianteCurso = async (req, res) => {
    let cid = req.params.cid;
    let eid = req.params.eid;
    nota = await Nota.find({ curso: cid, estudiante: eid });
    res.json(nota);
}

//Funciones Curso NOTAS
NotaController.CrearNotasCurso = async (estudiante, curso) => {
    const nota = new Nota();
    nota.estudiante = estudiante;
    nota.curso = curso;
    await nota.save();
}

NotaController.ExisteNota = async (estudiante, cursoId) => {
    obj = await Nota.find({ curso: cursoId, estudiante: estudiante });
    if (!obj[0]) {
        NotaController.CrearNotasCurso(estudiante, cursoId)
    }
}

// al editar un curso. Revisa las notas existentes 
//si un estudiante de la nota no esta en la lista de estudiantes editada, elimina la nota
NotaController.ActualizarListaNotas = async (estudiantes, cursoId) => {
    notasExistentes = await Nota.find({ curso: cursoId })
    existe = false;
    notasExistentes.forEach(nota => {
        estudiantes.forEach(est => {
            if (nota.estudiante == est._id) {
                existe = true;
            }
        });
        if (!existe) {
            Nota.findByIdAndRemove(nota._id)
                .then(res => console.log('eliminar'));
        }
        existe = false;
    });
}

NotaController.eliminarNotasCurso = async (cursoId) => {
    await Nota.remove({ curso: cursoId });
}

module.exports = NotaController;