const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotaSchema = new Schema({
    estudiante: { type: Schema.Types.ObjectId, ref: 'Estudiante' },
    curso: { type: Schema.Types.ObjectId, ref: 'Curso' },
    nota_i: { type: String, default: '' },
    nota_ii: { type: String, default: '' },
    comentario: { type: String, default: '' },
    date_created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Nota', NotaSchema);