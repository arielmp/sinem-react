const mongoose = require('mongoose');
const { Schema } = mongoose;

const EstudianteSchema = new Schema({
    expediente: {type:String},
    prestamo: {type:String},
    nombre: {type:String},
    fecha_nacimiento: {type:String},
    lugar_nacimiento: {type:String},
    cedula: {type:String},
    sexo: {type:String},
    telefono: {type:String},
    email: {type:String},
    direccion: {type:String},
    institucion_educativa: {type:String},
    grado: {type:String},
    poliza_estudiantil: {type:String},
    otros_medios: {type:String},
    otras_senas: {type:String},
    estado_estudiante: {type:String},
    date_created: { type: Date, default: Date.now },

    encargados: [{ type: Schema.Types.ObjectId, ref: 'Encargado' }],
    instrumento_principal : { type: Schema.Types.ObjectId, ref: 'Instrumento' },
    profesor_tutor : { type: Schema.Types.ObjectId, ref: 'Profesor' },
    instrumento_complementario : { type: Schema.Types.ObjectId, ref: 'Instrumento' },
    profesor_complementario : { type: Schema.Types.ObjectId, ref: 'Profesor' }

    
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);