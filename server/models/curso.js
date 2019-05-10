const mongoose = require('mongoose');
const { Schema } = mongoose;


const CursoSchema = new Schema({
    nombre: { type: String },              //lenguaje, instrumento...
    tipo: { type: String },               // orquesta, ensamble, individual
    fecha: { type: String },              // año de vigencia
    horario: { type: String },
    estado: { type: String, default: 'Activo' },              //Activo, Pendiente, Cerrado...
    date_created: { type: Date, default: Date.now },

    profesor: { type: Schema.Types.ObjectId, ref: 'Profesor' },
    estudiantes: [{ type: Schema.Types.ObjectId, ref: 'Estudiante' }]    
});

module.exports = mongoose.model('Curso', CursoSchema);